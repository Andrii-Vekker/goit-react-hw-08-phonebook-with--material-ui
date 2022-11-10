// import ContactForm from "../Form/ContactForm";
// import ContactsList from "../ContactsList/ContactsList";
// import Filter from "../Filter/Filter";
// import { ToastContainer } from 'react-toastify';
import UserRoutes from "./UserRoutes";
import { Container } from "./App.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/authOperations";


import Navigation from "components/Navigation/Navigation";

export default function App() {
  const dispatch = useDispatch();

useEffect(() => {
dispatch(currentUser())
}, [dispatch])


  return (
    <Container>
      <Navigation />
      <UserRoutes />
    </Container>
  );
};