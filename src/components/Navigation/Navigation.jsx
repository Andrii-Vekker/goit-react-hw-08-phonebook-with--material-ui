import UserMenu from "./UserMenu/UserMenu";
import UserAuth from "./UserAuth/UserAuth";
import { NavBar } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/authSelectors";
import { Typography } from "@mui/material";
import { ToolNav } from "./Navigation.styled";

export default function Navigation() {
const isLoginUser = useSelector(isLogin)

    return (
        <NavBar component="nav">
            <ToolNav>
                <Typography h="6">Phonebook</Typography>
                {isLoginUser ? <UserMenu /> : <UserAuth />}
            </ToolNav>
        </NavBar>
    );
};
