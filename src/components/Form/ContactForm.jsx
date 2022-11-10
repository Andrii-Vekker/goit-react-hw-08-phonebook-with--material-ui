import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/ContactsOperations';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { toast } from "react-toastify";


const schema = yup.object().shape({
    name: yup.string().required("please enter name"),
    number: yup.string().trim().min(7).max(7)
    .required("please enter tel")
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ ,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
    
});

const initialValues = {
    name: '',
    number: "",
};
export default function ContactForm() {
    const dispatch = useDispatch();
    const contactsData = useSelector(state => state.contacts.items);
    const handleSubmit = (values, { resetForm }) => {
        // const nameLength = values.name.length
                      if (!contactsData.includes(values.name)) {
        dispatch(addContacts(values))
        }
               else { toast.error("this name allready in list") }
        resetForm();
         };
    
    return (
        <>
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
                <FormContainer autoComplete="off">
                    <Label htmlFor="name">
                        <Span>Name</Span>
                        <Input type="text" name="name" />
                        <ErrorMessage name='name' component="div" />
                    </Label>
                    <Label htmlFor="phone">
                        <Span>Number</Span>
                        <Input type="tel" name="number" />
                        <ErrorMessage name='number' component="div" />
                    </Label>
                    <BtnAdd variant='contained' type="submit">Add <PersonAddIcon /></BtnAdd>
                </FormContainer>
            </Formik>
        </>
    );
};
