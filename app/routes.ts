import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sobre", "routes/about.tsx"),
  ...prefix("pais", [
    index("routes/country.tsx"),
    route("pais/:countryName", "routes/countries.tsx"),
  ]),
] satisfies RouteConfig;
