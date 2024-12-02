import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.tsx";
import Blogs from "./blog/Blog.tsx";
import MarketingPage from "./marketing-page/MarketingPage.tsx";
import SignInSide from "./sign-in-side/SignInSide.tsx";
import SignUp from "./sign-up/SignUp.tsx";
import Cookies from "js-cookie";

// Define a PrivateRoute component
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = Cookies.get("authToken"); // Check for the token in cookies
  return token ? <>{children}</> : <Navigate to="/signin" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MarketingPage />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
