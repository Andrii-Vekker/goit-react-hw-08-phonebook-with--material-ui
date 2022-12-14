// import ContactForm from "../Form/ContactForm";
// import ContactsList from "../ContactsList/ContactsList";
// import Filter from "../Filter/Filter";
import { ToastContainer } from 'react-toastify';
import UserRoutes from "./UserRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/authOperations";
import { Container } from "@mui/material";
import { useSelector } from 'react-redux';
import HomePage from 'components/pages/HomePage/HomePage';

import Navigation from "components/Navigation/Navigation";

export default function App() {
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.auth.isRefresh)
useEffect(() => {
dispatch(currentUser())
}, [dispatch])

  return (
    !refresh && (
      <Container>
      <ToastContainer/>
        <Navigation />
        {/* <HomePage/> */}
      <UserRoutes />
    </Container>
    )
  );
};