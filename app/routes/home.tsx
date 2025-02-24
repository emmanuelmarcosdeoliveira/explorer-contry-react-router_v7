import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " OFS | Explorando Países" },
    {
      name: "description",
      content:
        "Explorando Países pelo Mundo, site Desenvolvido por OFS | OliveiraFullStack",
    },
  ];
}

export default function Home() {
  return (
    <main className="px-2 py-32 bg-white md:px-0">
      <section className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                <span className="block xl:inline">Explore os Países em </span>
                <span className="block text-indigo-600 xl:inline">
                  tempo Real
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">
                Descubra detalhes sobre todos os países do mundo – de capitais a
                regiões!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to="/pais"
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Veja agora
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link
                  to="/sobre"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-xl">
              <img
                src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp"
                alt="Explore countries"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
