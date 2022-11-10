import "./App.css";
import React from "react";
import { Header } from "./content/Header/Header";
import { Body } from "./content/Body/Body";
import { Navigation } from "./content/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Navigation />
    </div>
  );
}

export default App;
