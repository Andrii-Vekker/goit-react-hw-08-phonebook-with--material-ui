import { Outlet } from "react-router";
import { isLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PublicRoutes({restricted}) {
  const isUserLogin = useSelector(isLogin);
  const shouldNavigate = isUserLogin && restricted
  return shouldNavigate ? <Navigate to="/contacts"/> : <Outlet/>

};
