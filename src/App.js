import "./App.css";
import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./content/Header/Header";
import { Navigation } from "./content/Navigation/Navigation";
import { Home } from "./content/Main/Home";
import { Random } from "./content/Main/Random";
import { Bookmark } from "./content/Main/Bookmark";

const theme = {
  colorFirst: "#620096",
  colorSecond: "#406AA3",
  colorThird: "#1DD3B0",
  colorDark: "#320E3B",
  colorLight: "#FFEAEE",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background: rgb(222, 199, 255);
  background: linear-gradient(
    90deg,
    rgba(222, 199, 255, 1) 0%,
    rgba(255, 255, 255, 1) 49%,
    rgba(205, 192, 255, 1) 100%
  );
  z-index: 3;
`;

export default App;
