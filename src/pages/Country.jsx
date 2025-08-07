import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { LoadingPage } from "./LoadingPage";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchCountries } from "../components/UI/SearchCountries";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setData(res.data);
    });
  }, []);

  if (isPending) return <LoadingPage />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const filterCountry = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = data.filter(
    (country) => searchCountry(country) && filterCountry(country)
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="w-[80%] mx-auto px-6">
        <SearchCountries
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          data={data}
          setData={setData}
        />

        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterCountries.map((currElem, index) => (
            <CountryCard currElem={currElem} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
