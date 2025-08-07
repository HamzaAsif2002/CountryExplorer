import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";

export const CountryCard = ({ currElem }) => {
  return (
    <li className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
      {/* Flag */}
      <img
        src={currElem.flags.png}
        alt={`${currElem.name.common} flag`}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      {/* Details */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {currElem.name.common}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Capital:</span>
          {currElem.capital?.[0]}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Population:</span>
          {currElem.population.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Region:</span>
          {currElem.region}
        </p>
        <NavLink to={`/country/${currElem.name.common}`}>
          <button className="text-sm flex items-center gap-2 bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 hover:gap-3 transition-all duration-300">
            Read More <ArrowRight className="w-3 h-3" />
          </button>
        </NavLink>
      </div>
    </li>
  );
};
