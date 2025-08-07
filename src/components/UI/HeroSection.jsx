import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

export const HeroSection = () => {
  return (
    <div className="w-full py-16 ">
      <div className="w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Explore the World, One Country at a Time
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6">
            Dive into the history, culture, and beauty of nations across the
            globe. Use powerful search and filters to explore countries and
            uncover the details that matter most to you.
          </p>
          <NavLink to="/country">
            <button className=" flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:gap-3 transition-all duration-300">
              Start Exploring <ArrowRight className="w-5 h-5" />
            </button>
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/mainImg.jpg"
            alt="World Exploration"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
