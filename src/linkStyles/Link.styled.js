import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkStyled = styled(NavLink)`
  align-items: center;
  padding: 3px;
  margin-right: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: red;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: skyblue;
  }

`