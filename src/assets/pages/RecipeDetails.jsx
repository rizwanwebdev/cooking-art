import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterSection from "../components/FooterSection";
import ImageWithFallBack from "../components/ImageWithFallBack";
import { Dumbbell, MapPinCheck } from "lucide-react";
import Header from "../components/Header";
const RecipeDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipe, setRecipe] = useState([]);
  const location = useLocation();
  const prams = new URLSearchParams(location.search);
  const recipeId = prams.get("i");

  async function fetchRecipe(recipeId) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );

      const data = await res.json();
      setRecipe(data.meals?.[0] || []);
    } catch (error) {
      setError("Didn't found the recipe");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (recipeId) {
      fetchRecipe(recipeId);
    }
  }, [recipeId]);

  let displayText = "";
  if (loading) {
    displayText = "Loading...";
  } else if (error) {
    displayText = error;
  } else if (!recipe || Object.keys(recipe).length === 0) {
    displayText = "No recipes found.";
  }
  const videoId = recipe?.strYoutube?.split("v=")[1]; // "4aZr5hZXP_s"
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <>
      <Header />
      {/* condition for to check if true below */}
      {displayText ? (
        <div className="text-center py-16 text-xl font-semibold">
          {displayText}
        </div>
      ) : (
        <div>
          <section className="py-16 px-6 text-primary-text">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:order-1 flex justify-center items-center">
                  <ImageWithFallBack
                    src={recipe?.strMealThumb}
                    alt={recipe?.strMeal}
                    className={
                      "shadow-2xl rounded-4xl overflow-hidden border-2 border-primary-color"
                    }
                  />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-4xl font-semibold mb-4">
                    {recipe?.strMeal}
                  </h1>
                  <div className="flex flex-row justify-start gap-4 *:gap-2 *:flex *:flex-row mb-2 *:font-semibold">
                    <span>
                      <Dumbbell className="w-4 " /> Category:&nbsp;
                      {recipe?.strCategory}
                    </span>
                    <span>
                      <MapPinCheck className="w-4" />
                      Area:&nbsp;{recipe?.strArea}
                    </span>
                  </div>

                  <p>
                    <span className="font-semibold">Instructions:</span>&nbsp;
                    {recipe?.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className=" px-6 text-primary-text ">
            <div className="container mx-auto flex flex-col">
              <h2 className="text-3xl text-center font-semibold mb-4">
                Ingredients & Measures
              </h2>

              <table className="table-auto rounded border-collapse border border-gray-300 w-full text-left">
                <thead>
                  <tr className="bg-[hsl(30,25%,92%)] ">
                    <th className="border border-gray-300 px-4 py-2">
                      Ingredient
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Measure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((num) => {
                      const ingredient = recipe[`strIngredient${num}`];
                      const measure = recipe[`strMeasure${num}`];
                      return ingredient?.trim()
                        ? { ingredient, measure }
                        : null;
                    })
                    .filter(Boolean)
                    .map((item, idx) => (
                      <tr key={idx}>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.ingredient}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.measure}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="text-primary-text">
            <div className="container mx-auto">
              {embedUrl && (
                <div className="my-8 aspect-video w-full max-w-3xl mx-auto">
                  <h2 className="text-center font-semibold text-3xl mb-3 ">
                    Watch Video
                  </h2>
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl shadow-lg"
                  ></iframe>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* else below and new div */}
      <FooterSection />
    </>
  );
};

export default RecipeDetails;
