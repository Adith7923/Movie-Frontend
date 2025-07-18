import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authpage/AuthPage";
import UserPage from "./pages/User/UserPage"; // <-- Import your UserPage
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/user/*" element={<UserPage />} /> {/* User Routes */}
      </Routes>
    </Router>
  );
}

export default App;
