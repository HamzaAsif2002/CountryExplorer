import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import data from "../../api/FooterApi.json";
import { Link } from "react-router";
export const Footer = () => {
  const footerIcon = {
    FaLocationDot: <FaLocationDot />,
    IoCall: <IoCall />,
    BiLogoGmail: <BiLogoGmail />,
  };

  return (
    <>
      <footer className="bg-gray-800 text-white w-full py-3">
        <ul className="m-auto w-[80%]  flex flex-wrap justify-between items-center">
          {data.map((currelem, index) => {
            const { icon, title, details } = currelem;
            return (
              <li key={index} className="flex items-center gap-4">
                {/* Icon */}
                <div className="text-blue-400 text-3xl">{footerIcon[icon]}</div>

                {/* Text Content */}
                <div>
                  <div className="text-lg font-semibold text-white">
                    {title}
                  </div>
                  <div className="text-gray-300 text-sm mt-1">{details}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
      <div className="bg-gray-900 text-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side */}
          <p className="text-sm text-center sm:text-left">
            &copy; 2025 All rights reserved{" "}
            <span className="font-semibold text-white">Hamza Dev</span>
          </p>

          {/* Right side - Navigation */}
          <nav>
            <ul className="flex flex-wrap gap-6 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/country"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Countries
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
