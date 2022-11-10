import ContactForm from "components/Form/ContactForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <ContactsList />
      <Filter/>
    </>
  )
}
