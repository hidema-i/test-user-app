import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { Page404 } from "./components/pages/Page404";
import { Setting } from "./components/pages/Setting";
import { UserManagement } from "./components/pages/UserManagement";
import Header from "./organisms/layout/Header";

export const Routers = memo(() => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/usermanagement" element={<UserManagement />}></Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
});
