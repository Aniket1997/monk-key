import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./dashboard/Dashboard.tsx";
import Blogs from './blog/Blog.tsx'
import MarketingPage from './marketing-page/MarketingPage.tsx'
import SignIn from './sign-in/SignIn.tsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MarketingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
