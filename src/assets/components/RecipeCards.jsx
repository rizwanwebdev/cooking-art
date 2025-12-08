import Card from "./Card";
import { ChefHat } from "lucide-react";
import Paginations from "./Paginations";

const RecipeCard = ({ recipes, currentPage, setCurrentPage, totalPages }) => {
  return (
    <>
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-primary-text">
              Recpies Page: {currentPage + "/" + totalPages}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.idMeal} className="relative">
                <Card
                  strMeal={recipe.strMeal}
                  strInstructions={recipe.strInstructions}
                  strMealThumb={recipe.strMealThumb}
                  idMeal={recipe.idMeal}
                />
              </div>
            ))}
          </div>

          <Paginations
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default RecipeCard;
