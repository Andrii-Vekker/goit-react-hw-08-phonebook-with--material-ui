import ContactForm from "components/Form/ContactForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 150px
`
export default function ContactsPage() {
  return (
    <Div>
      <ContactForm />
      <ContactsList />
      <Filter/>
    </Div>
  )
}
