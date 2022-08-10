import "./App.css";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AuthPage from "./routes/AuthPage";
import DashboardPage from "./routes/DashboardPage";
import ExpensePage from "./routes/ExpensePage";
import ProfilePage from "./routes/ProfilePage";
import Header from "./componensts/Navigation/Header";
import SideBar from "./componensts/Navigation/SideBar";
import LoginPage from "./routes/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="expense" element={<ExpensePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
