import ImageWithFallBack from "./ImageWithFallBack";

import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [serchTerm, setSerchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/recipes?search=${serchTerm}`);
  };
  return (
    <>
      <section className="relative bg-linear-to-b from-[#f0ebe6] to-white py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="mb-8 flex justify-center">
            <ImageWithFallBack
              src={
                "https://images.unsplash.com/photo-1617735605078-8a9336be0816?fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwa2l0Y2hlbiUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2NDgxMjAyNnww&ixlib=rb-4.1.0&q=80&w=1080"
              }
              alt="Fresh cooking ingredients and kitchen tools"
              className="w-full max-w-xl h-64 object-cover rounded-2xl opacity-80"
            />
          </div>
          <h1 className="text-primary-text mb-4 text-4xl md:text-5xl font-bold text-center">
            Create. Cook. Celebrate Flavor.
          </h1>
          <p className="text-primary-text mb-10 max-w-2xl mx-auto text-center">
            Discover recipes that blend creativity and taste.
          </p>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-6 py-2 border-2 border-[hsl(20,5.9%,90%)]">
                <Search className="w-6 h-6 hidden md:block text-primary-text" />
                <input
                  value={serchTerm}
                  type="text"
                  name="search"
                  placeholder="Search recipes by name…"
                  className="flex-1 outline-none bg-transparent text-primary-text"
                  onChange={(e) => setSerchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-primary-color hover:bg-hover-color text-white px-4 py-1 rounded-full transition-all cursor-pointer md:py-2.5 "
                >
                  <Search className="w-6 h-6 text-white md:hidden" />
                  <span className="hidden md:block">Search</span>
                </button>
              </div>
            </form>
            <p className="mt-3 text-primary-text text-center">
              Press enter to explore recipes on the next page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
