import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.tsx";
import Blogs from "./blog/Blog.tsx";
import MarketingPage from "./marketing-page/MarketingPage.tsx";
import SignInSide from "./sign-in-side/SignInSide.tsx";
import SignUp from "./sign-up/SignUp.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MarketingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
