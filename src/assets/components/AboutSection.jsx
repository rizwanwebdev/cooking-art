import ImageWithFallBack from "./ImageWithFallBack";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <section className=" py-16 px-6 bg-linear-to-r from-[hsl(30,25%,95%)] to-[hsl(120,20%,95%)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
            <div className="flex justify-center">
              <ImageWithFallBack
                src="https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0ODI1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full max-w-md h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-primary-text mb-6 text-4xl font-semibold">
                Where Creativity Meets The Kitchen
              </h2>
              <p className="text-primary-text mb-8">
                Cooking Art mixes culinary passion with visual creativity. Every
                dish is a story, a blend of flavors and imagination. We believe
                that cooking is not just about following recipes—it's about
                expressing yourself, experimenting with ingredients, and
                creating memories around the table. Join our community of food
                artists and discover recipes that inspire both your palate and
                your creativity.
              </p>
              <Link to="/about">
                <button className="bg-primary-color hover:bg-hover-color text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
