import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import RecipeCards from "../components/RecipeCards";
import EmptyState from "../components/EmptyState";
import { Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const Recipes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const itemsPerPage = 6;
  const indexOfLast = currentPage * itemsPerPage;

  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialSearch);
  // const [searchTerm, setSearchTerm] = useState(initialSearch);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError("");
    setHasSearched(true);
    setCurrentPage(1);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (e) {
      setError("Fetch failed");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (initialSearch) {
      fetchRecipes(initialSearch);
    }
  }, [initialSearch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: query });
    fetchRecipes(query);
  };

  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];
  async function fetchCategory(category) {
    setLoading(true);
    setError("");
    setHasSearched(true);
    setQuery("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      const data = await res.json();
      setRecipes(data.meals || []);
      setCurrentPage(1);
    } catch (error) {
      setError("Failed to Fetch");
    } finally {
      setLoading(false);
    }
  }

  let displayText = "";
  if (loading) {
    displayText = "Loading...";
  } else if (error) {
    displayText = error;
  } else if (!hasSearched) {
    displayText = "Search recipes by name or select a category";
  } else if (recipes.length === 0) {
    displayText = "No recipes found.";
  }

  return (
    <>
      <Header />
      <section className="bg-linear-to-b from-[hsl(30,25%,92%)] to-white  py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-primary-text mb-4 text-5xl font-bold">
              Discover Amazing Recipes
            </h1>
            <p className="text-primary-text max-w-2xl mx-auto">
              Explore our curated collection of recipes that blend creativity
              with flavor. From quick meals to elaborate dishes, find your next
              culinary masterpiece.
            </p>
          </div>
          <SearchBar
            query={query}
            setQuery={setQuery}
            t
            handleSubmit={handleSubmit}
          />
          {/* Category buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-primary-text" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  fetchCategory(category);
                }}
                className={` cursor-pointer px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-primary-color text-white shadow-md"
                    : "bg-white text-primary-text border border-[hsl(20,5.9%,90%)] hover:border-primary-color"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center">
            {recipes.length > 0 ? (
              <RecipeCards
                recipes={currentRecipes}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              <EmptyState displayText={displayText} />
            )}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Recipes;
