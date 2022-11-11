import "./App.css";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./content/Header/Header";
import { Navigation } from "./content/Navigation/Navigation";
import { Home } from "./content/Main/Home";
import { Random } from "./content/Main/Random";
import { Bookmark } from "./content/Main/Bookmark";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Main>
        <Navigation />
      </div>
    </Router>
  );
}

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export default App;
