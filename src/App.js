import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import MoviePage from "./MoviePage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id">
        <MoviePage />
      </Route>
    </Switch>
  );
};

export default App;
