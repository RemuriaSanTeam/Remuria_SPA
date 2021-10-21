import About from "./content/about";
import Sub from "./content/sub";

const routes = [
  { path: "/", component: About, exact: true },
  { path: "/sub", component: Sub },
];

export default routes;
