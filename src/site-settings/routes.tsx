import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/home";

export enum Routes {
  HOME = "/",
  PAGE404 = "404",
}

const routers: { component: React.FC; path: Routes }[] = [
  { component: Home, path: Routes.HOME },
];

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routers.map((item) => (
          <Route path={item.path} component={item.component} exact />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
