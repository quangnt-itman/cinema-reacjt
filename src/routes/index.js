import HomePage from "../containers/home/HomePage";
import AboutPage from "../containers/home/AboutPage";
import ListMoviePage from "../containers/home/ListMoviePage";
import DetailPage from "../containers/home/DetailPage";
import HOC from "../containers/home/HOC";
import Dashboard from "../containers/admin/Dashboard";
import AddUser from "../containers/admin/AddUser";
import HooksPage from "../containers/home/HooksPage";
import DemoMaterialPage from "../containers/home/DemoMaterialPage";
import AddMovie from "../containers/admin/AddMovie";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HOC,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
  {
    exact: false,
    path: "/demo-material",
    component: DemoMaterialPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
  {
    exact: false,
    path: "/add-movie",
    component: AddMovie,
  },
];

export { routesHome, routesAdmin };
