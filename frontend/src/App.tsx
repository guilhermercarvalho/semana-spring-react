import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Dashboard, Home } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Switch>
  );
}

export default App;
