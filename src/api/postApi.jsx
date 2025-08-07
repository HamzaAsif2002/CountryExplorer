import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//HTTP get method
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

//for Indevedual Country Data
export const getIndvCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
