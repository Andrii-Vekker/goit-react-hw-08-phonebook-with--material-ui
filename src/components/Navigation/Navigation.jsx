import UserMenu from "./UserMenu/UserMenu";
import UserAuth from "./UserAuth/UserAuth";
import { NavBar } from "./Navigation.styled";
import HomePage from "components/pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/authSelectors";

export default function Navigation() {
const isLoginUser = useSelector(isLogin)

    return (
        <NavBar>
            <HomePage/>
          {isLoginUser ? <UserMenu /> : <UserAuth />}
            
        </NavBar>
    );
};
