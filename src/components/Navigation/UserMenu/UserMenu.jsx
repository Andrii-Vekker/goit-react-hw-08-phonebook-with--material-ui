import { UserMenuContainer } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import {Typography} from "@mui/material";

export default function UserMenu() {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.user.email)
    return (
        <UserMenuContainer>
            <Typography marginRight="10px">{email}</Typography>
            <Button color="inherit" variant="outlined" onClick={() => dispatch(logOutUser())}>LOGOUT</Button>          
        </UserMenuContainer>
    );
};
