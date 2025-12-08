import { Link } from "react-router-dom";

const SectionExplore = () => {
  return (
    <>
      <section className="py-20 px-6 bg-linear-to-r from-[hsl(25,85%,75%)] to-[hsl(25,85%,85%)] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, hsl(0,0%,40%) 0, hsl(0,0%,40%) 1px, transparent 1px, transparent 20px)`,
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-white mb-6 text-4xl font-semibold">
            Ready to Explore Thousands of Recipes?
          </h2>

          <Link to="/recipes">
            <button className="bg-white hover:bg-[hsl(30,25%,95%)] text-primary-text px-12 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
              Browse Recipes
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SectionExplore;
