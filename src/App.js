import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from "./containers/home/HomePage";
// import AboutPage from "./containers/home/AboutPage";
// import ListMoviePage from "./containers/home/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";

import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Auth from "./containers/admin/Auth";

function App() {
  const showMenusHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showMenusAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showMenusHome(routesHome)}
        {showMenusAdmin(routesAdmin)}

        <Route exact={false} path="/auth" component={Auth} />

        {/* <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list-movie" component={ListMoviePage} /> */}

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
