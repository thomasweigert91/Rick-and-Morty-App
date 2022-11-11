import "./App.css";
import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { Header } from "./content/Header/Header";
import { Navigation } from "./content/Navigation/Navigation";
import { Home } from "./content/Main/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
      </Main>
      <Navigation />
    </div>
  );
}

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default App;
