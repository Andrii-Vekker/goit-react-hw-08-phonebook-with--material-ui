import { Routes, Route } from "react-router-dom";
import NotFoundPage from "components/pages/NotFoundPage/NotFoundPage";
import RegisterPage from "components/pages/RegisterPage/RegisterPage";
import LoginPage from "components/pages/LoginPage/LoginPage";
import ContactsPage from "components/pages/ContactsPage/ContactsPage";
import Home from "components/Home/Home";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoutes from "components/PublicRoutes/PublicRoutes";



export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoutes restricted={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
