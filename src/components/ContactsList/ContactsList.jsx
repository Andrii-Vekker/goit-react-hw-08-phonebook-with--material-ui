import { List, Item } from "./ContactList.styled";
import { BtnAdd } from "components/Form/Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "redux/ContactsOperations";
import { fetchContacts } from "redux/ContactsOperations";
import { useEffect } from "react";
import Loader from "components/Loader/Loader";


export default function ContactsList() {
    const filterValue = useSelector(state => state.filter.filter);
    const storeContacts = useSelector(state => state.contacts.items)
    const loadingStatus = useSelector(state => state.contacts.isLoading)
      const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items) 
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
      
    const filteredContacts = () => {
      const normalizedFilter = filterValue.toLowerCase();
      return storeContacts.filter(contact => contact.name.toLowerCase()
        .includes(normalizedFilter))
  };

  const visibleContacts = filteredContacts()
     
       return (
           <>
               {loadingStatus && <Loader/>}
               <List>
                {contacts.length>0 && visibleContacts.map(({ name, number, id }) => (
                                    <Item key={id}>{name} : {number}
                        <BtnAdd type="button" onClick={() => dispatch(deleteContacts(id))}>
                            <span style={{ color: "red", cursor: "pointer" }}>&times;</span></BtnAdd>
                    </Item>
                                    
                ))}
            </List>
        </>
    );
};

