import CountryData from "../api/CountryData.json";

export const About = () => {
  return (
    <div className="w-[80%] mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-700 tracking-wide">
        Top 10 Country Details Are
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {CountryData.map((currelem, index) => {
          const {
            id,
            name,
            population,
            capital,
            region,
            language,
            currency,
            description,
          } = currelem;

          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                animationName: "fadeInUp",
                animationDuration: "500ms",
              }}
            >
              <h2 className="text-xl font-bold text-blue-600 mb-3">{name}</h2>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold text-gray-800">Population:</span>
                {population.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold text-gray-800">Capital: </span>
                {capital}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold text-gray-800">Region: </span>
                {region}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold text-gray-800">Language: </span>
                {language}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold text-gray-800">Currency: </span>
                {currency}
              </p>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          );
        })}
      </div>

      {/* Tailwind doesn't support keyframe animations inline, so add this global style */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
