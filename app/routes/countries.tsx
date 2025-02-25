import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const filteredCountries = loaderData.filter((pais: any) => {
    const matchesRegion =
      !region || pais.region.toLowerCase() === region.toLowerCase();
    const matchesSearch =
      !search || pais.name.common.toLowerCase().includes(search);
    return matchesSearch && matchesRegion;
  });
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-500">
        Países do Mundo
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Pesquise pelo nome do Pais "
        />
        <select
          value={region}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
          onChange={(event) => setRegion(event.target.value)}
        >
          <option value="">Todas as Regiões</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {filteredCountries.length === 0 ? (
        <div className="text-indigo-600 text-2xl flex items-center justify-center">
          Não há países que correspondem ao valor digitado...
        </div>
      ) : (
        ""
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCountries.map((pais: any) => (
          <li
            className="border p-2 rounded-md border-indigo-300 h-32 hover:bg-indigo-50 transition-colors"
            key={pais.id}
          >
            <Link
              className="text-indigo-600  text-lg font-semibold"
              to={`/pais/${pais.name.common}`}
            >
              {pais.name.common}
              <div className="text-gray-600 text-sm mt-1">
                Localização: {pais.region}
              </div>
              <p className="text-sm">População: {pais.population}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
