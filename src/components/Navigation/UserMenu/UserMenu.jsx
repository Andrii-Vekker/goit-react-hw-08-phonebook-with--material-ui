import { UserMenuContainer } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
import { useSelector } from "react-redux";

export default function UserMenu() {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.user.email)
    return (
        <UserMenuContainer>
            <p>{email}</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>LOGOUT</button>          
        </UserMenuContainer>
    );
};
