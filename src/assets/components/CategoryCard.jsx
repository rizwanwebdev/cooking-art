import ImageWithFallBack from "./ImageWithFallBack";

const CategoryCard = ({ title, imageUrl, bgColor }) => {
  return (
    <>
      <div
        className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallBack
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Sketch overlay effect */}
          <div className="absolute inset-0 border-4 border-dashed border-primary-color opacity-20 m-2 rounded-lg pointer-events-none" />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-primary-text">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
