import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import MainPage from "../Main/Main";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar /> <MainPage />
              </>
            }
          />
          <Route path="/project1" component={() => <div>Project 1</div>} />
          <Route path="/project2" component={() => <div>Project 2</div>} />
          <Route path="/project3" component={() => <div>Project 3</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
