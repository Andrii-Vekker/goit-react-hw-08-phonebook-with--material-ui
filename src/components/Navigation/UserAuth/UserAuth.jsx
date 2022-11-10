import { AuthContainer } from "./UserAuth.stylrd";
import { LinkStyled } from "linkStyles/Link.styled";


export default function UserAuth() {
  return (
      <AuthContainer>
          <LinkStyled to="/register">Register</LinkStyled>
          <LinkStyled to="/login">Login</LinkStyled>
    </AuthContainer>
  )
}
