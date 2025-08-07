import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { getIndvCountryData } from "../api/postApi";
import { LoadingPage } from "./LoadingPage";

export const IndvCountry = () => {
  const { name } = useParams();

  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getIndvCountryData(name);
        setData(res.data[0]);
        console.log(res);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    });
  }, [name]);

  if (isPending || !data) return <LoadingPage />;

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex justify-center items-center py-12 px-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-12 p-8 border border-gray-200">
        {/* Flag Image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="p-2 bg-white shadow-lg rounded-lg border border-gray-300">
            <img
              src={data.flags?.png}
              alt={`${data.name?.common} flag`}
              className="w-80 h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Country Info */}
        <div className="flex flex-col gap-6 text-gray-800 w-full">
          <h1 className="text-4xl font-extrabold text-blue-700 border-b-4 border-blue-500 pb-2">
            {data.name?.common}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Capital:</span>{" "}
              {data.capital?.[0]}
            </p>

            <p className="text-lg">
              <span className="font-semibold text-gray-700">Currency:</span>{" "}
              {data.currencies && Object.values(data.currencies)[0]?.name}
            </p>

            <p className="text-lg">
              <span className="font-semibold text-gray-700">Languages:</span>{" "}
              {data.languages && Object.values(data.languages).join(", ")}
            </p>

            <p className="text-lg">
              <span className="font-semibold text-gray-700">Population:</span>{" "}
              {data.population?.toLocaleString()}
            </p>

            <p className="text-lg">
              <span className="font-semibold text-gray-700">Region:</span>{" "}
              {data.region}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-6 left-6">
        <NavLink to="/country">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            Go Back
          </button>
        </NavLink>
      </div>
    </section>
  );
};
