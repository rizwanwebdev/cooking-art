import { Link } from "react-router-dom";
import cookingArt from "../images/logo/cookingArt.png";
import ImageWithFallBack from "../components/ImageWithFallBack";
import {
  ChefHat,
  Pencil,
  Facebook,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";

const FooterSection = () => {
  return (
    <>
      <footer className="bg-[hsl(30,25%,92%)] pt-12 pb-6 mt-20">
        {/* Decorative pencil-drawn line */}
        <div className="container mx-auto px-6 mb-8">
          <div className="h-px bg-linear-to-r from-transparent via-primary-color to-transparent opacity-30" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Tagline */}
            <div>
              <Link to="/">
                <div className="flex gap-2 mb-3 cursor-pointer max-w-38">
                  <ImageWithFallBack src={cookingArt} alt={"CookingArt Logo"} />
                </div>
              </Link>

              <p className="text-primary-text">
                Where creativity meets <br /> the kitchen
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary-text mb-4 text-xl font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2 ">
                <li>
                  <Link to="/">
                    <button className="text-primary-text hover:text-hover-color transition-colors cursor-pointer">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/recipes">
                    <button className="text-primary-text hover:text-hover-color transition-colors cursor-pointer">
                      Recipes
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button className="text-primary-text hover:text-hover-color transition-colors cursor-pointer">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <button className="text-primary-text hover:text-hover-color transition-colors cursor-pointer">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-primary-text mb-4 text-xl font-semibold">
                Connect With Us
              </h4>
              <div className="flex items-center gap-2 mb-4 text-primary-text">
                <Mail className="w-5 h-5" />
                <span>
                  <a href="mailto:hello@cookingart.com">hello@cookingart.com</a>
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary-text hover:text-hover-color transition-colors"
                >
                  <Facebook className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="text-primary-text hover:text-hover-color transition-colors"
                >
                  <Instagram className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="text-primary-text hover:text-hover-color transition-colors"
                >
                  <Twitter className="w-6 h-6" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-primary-text pt-6 text-center">
            <p className="text-primary-text font-handwritten">
              Made with Flavor & Art — Cooking Art (Pencil & Food)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
