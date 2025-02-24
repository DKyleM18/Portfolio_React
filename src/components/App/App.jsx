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
        </Routes>
      </div>
    </div>
  );
};

export default App;
