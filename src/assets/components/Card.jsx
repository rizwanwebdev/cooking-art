import ImageWithFallBack from "./ImageWithFallBack";
import { useNavigate } from "react-router-dom";
const Card = ({ strMeal, strMealThumb, strInstructions, idMeal }) => {
  const navigate = useNavigate();
  const handleOpenDetails = () => {
    navigate(`/recipe?i=${idMeal}`);
  };
  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300  hover:-translate-y-3">
        <div className="relative h-56 overflow-hidden">
          <ImageWithFallBack
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Sketchy border accent */}
          <div className="absolute inset-0 m-3">
            <div
              className="w-full h-full border-2 border-primary-color opacity-30 rounded-lg"
              style={{
                borderStyle: "solid",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-primary-text mb-2">{strMeal}</h4>
          <p className="line-clamp-2 text-primary-text mb-4">
            {strInstructions}
          </p>
          <button
            onClick={handleOpenDetails}
            className="bg-[hsl(120,20%,75%)] hover:bg-[hsl(120,20%,70%)] text-[hsl(0,0%,30%)] px-6 py-2 rounded-full transition-all cursor-pointer"
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
