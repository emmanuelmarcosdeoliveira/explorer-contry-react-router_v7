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
    index("routes/countries.tsx"),
    route(":countryName", "routes/country.tsx"),
  ]),
] satisfies RouteConfig;
