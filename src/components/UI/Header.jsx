import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <div className="w-[80%] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">WorldAtlas</h1>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex md:items-center md:gap-6 md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0">
            {["/", "/about", "/country", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Country", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-blue-400 transition duration-200 ${
                        isActive ? "text-blue-400 font-semibold" : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)} // Close on click
                  >
                    {names[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
