import { getContacts, addContact, removeContact } from "API/Api";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const isDublicate = ({name}, contacts) => {
  const normalizedName = name.toLowerCase()
      const result = contacts.find(item => {
    return (normalizedName === item.name.toLowerCase())
  });
  return result
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts
    } catch (error) {
      return rejectWithValue(error.message)
    };
  });

  export const addContacts = createAsyncThunk(
  'contacts/addContacts',
    async (data, { rejectWithValue }) => {
    try {
      const contacts = await addContact(data);
      return contacts
    } catch (error) {
      return rejectWithValue(error.message)
      };
      
    },
    {
      condition: (data, {getState}) => {
        const { contacts } = getState() 
       if (isDublicate(data, contacts.items)) {
        toast.error("This name allredy in contacts")
       }
    }
    });
  
    export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
      async (id, { rejectWithValue }) => {
    try {
      await removeContact(id);
      return id
    } catch (error) {
      return rejectWithValue(error.message)
    };
  });
////////////////////////////////////////////////////////////////////////
// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//       const contacts = await getContacts();
//         dispatch(fetchContactsSuccess(contacts))
//     } catch (error) {
//         dispatch(fetchContactsError(error.message))
//     }
// };

////////////////////////////////////////////////////////////////////////////////////


// export const addContacts = (data) => async (dispatch, getstate) => {
//   // console.log(data)
//   const { contacts } = getstate()
//   if (isDublicate(data, contacts.items)) {
//     return alert("fuck");
//   };
//   dispatch(addContactsRequest());
//   try {
//     const result = await addContact(data);
// // console.log(result)
//     dispatch(addContactsSuccess(result))
//     } catch (error) {
//       dispatch(addContactsError(error.message))
//   };

// };

// export const deleteContact = (id) => async (dispatch) => {
// try {
//     dispatch(deleteContactsRequest());
//     await removeContact(id);
//     dispatch(deleteContactsSuccess(id))
//     } catch (error) {
//       dispatch(deleteContactsError(error.message))
//   };
// }


