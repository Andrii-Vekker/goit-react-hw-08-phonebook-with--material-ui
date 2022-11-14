import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { isLogin } from "redux/auth/authSelectors";
import { Navigate } from "react-router-dom";




export default function HomePage() {
    const isUserLogin = useSelector(isLogin);
  return (
      <div style={{ marginTop: "200px" }}>
      {!isUserLogin ? <NavLink to="/login">
        <img src="https://png.pngtree.com/png-vector/20190628/ourlarge/pngtree-phone-icon-for-your-project-png-image_1520830.jpg" alt="phone"  />
      </NavLink> : <Navigate to="/contacts"/>}
      </div>
  )
}
