import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./Pages/homepage";
import LoginPage from "./Pages/loginpage";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router> {/* Ensure the Router is wrapping your app */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} // Protecting home route
        />
      </Routes>
    </Router>
  );
};

export default App;
