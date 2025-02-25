import { Link } from "react-router";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await response.json();
  return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || null,
    oficialName: loaderData[0]?.name?.official || null,
    region: loaderData[0]?.region || null,
    subRegion: loaderData[0]?.subregion || null,
    capital: loaderData[0]?.capital || null,
    population: loaderData[0]?.population || null,
    flagUrl: loaderData[0]?.flags?.png || "",
  };
  return (
    <>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-[1200px] m-auto ">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-900">{country.name}</h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Nome oficial: </span>
              {country.oficialName}
            </p>
            <p>
              <span className="font-semibold">Região: </span>
              {country.region}
            </p>

            <p>
              <span className="font-semibold"> subRegião: </span>
              {country.subRegion}
            </p>

            <p>
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
            <p>
              <span className="font-semibold">População: </span>
              {country.population.toLocaleString()}
            </p>
          </div>
        </div>
        {country.flagUrl && (
          <div className="flex justify-center items-center">
            {" "}
            <img
              className="w-120 h-auto border rounded shadow-lg"
              src={country.flagUrl}
              alt={country.name}
            />
          </div>
        )}
        <Link
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-center p-2 rounded-md w-22"
          to="/pais"
        >
          Voltar
        </Link>
      </div>
    </>
  );
}
