import { NavLink } from "react-router-dom";

import cookingArt from "../images/logo/cookingArt.png";
const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[hsl(30,25%,92%)] shadow-md flex justify-center">
        <div className="container max-auto px-6 py-2 flex items-center justify-between">
          <div>
            <NavLink to="/">
              <img
                className="h-[50px]"
                src={cookingArt}
                alt="Cooking Art Logo"
              />
            </NavLink>
          </div>
          <nav>
            <ul className="list-none hidden md:flex gap-8 *:hover:text-hover-color *:transition">
              {[
                { to: "/", label: "Home" },
                { to: "/recipes", label: "Recipes" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `font-semibold ${
                        isActive ? "text-hover-color" : "text-primary-text"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <NavLink to="/recipes">
            <button className="bg-primary-color hover:bg-hover-color text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer">
              Start Cooking
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
