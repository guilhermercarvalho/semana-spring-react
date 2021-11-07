import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Home } from "pages";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
