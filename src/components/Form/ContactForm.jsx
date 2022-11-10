import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/ContactsOperations';

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    number: yup.string().trim().min(7).max(7)
    .required("Please enter your tel")
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
        console.log(values)
       if (!contactsData.includes(values.name)) {
        dispatch(addContacts(values))
       }else {alert(`${values.name} is allready in contacts`) }
        resetForm();
         };

    
    return (
        <>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                <Label htmlFor="name">
                    <Span>Name</Span>
                        <Input type="text" name="name"  />
                    <ErrorMessage name='name' component="div"/> 
                </Label>
                 <Label htmlFor="phone">
                  <Span>Number</Span>
                        <Input type="tel" name="number" />
                    <ErrorMessage name='number' component="div"/> 
                </Label>
                    <BtnAdd type="submit">Add contact{ }</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};
