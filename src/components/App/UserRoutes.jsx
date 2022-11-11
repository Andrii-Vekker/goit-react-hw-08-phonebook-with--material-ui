import { Routes, Route } from "react-router-dom";
import { Suspense, lazy} from "react";
import Loader from "components/Loader/Loader";
import HomePage from "components/pages/HomePage/HomePage";

const  NotFoundPage = lazy(() => import("components/pages/NotFoundPage/NotFoundPage")); 
const  RegisterPage = lazy(() => import("components/pages/RegisterPage/RegisterPage")); 
const  LoginPage = lazy(() => import("components/pages/LoginPage/LoginPage")); 
const  ContactsPage = lazy(() => import("components/pages/ContactsPage/ContactsPage")); 
const  PrivateRoute = lazy(() => import("components/PrivateRoute/PrivateRoute")); 
const  PublicRoutes = lazy(() => import("components/PublicRoutes/PublicRoutes")); 

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route element={<PublicRoutes restricted={true} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
