import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/ContactsOperations';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { toast } from "react-toastify";

// function validateName(value) {
//     let error;
//     if (!value) {
//         toast.error("Please enter name")
//         error = 'Required';
  
//         return error;
//     };
// };

const schema = yup.object().shape({
    name: yup.string().required("enter your name"),
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
    const handleSubmit = (values, { resetForm, validate } ) => {
        validate(values)
        dispatch(addContacts(values))
        resetForm();
         };
    
    return (
        
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}
            validateOnChange={false} validateOnBlur={false} >
                {
                    ({errors, touched}) => (
                         <FormContainer autoComplete="off">
                    <Label htmlFor="name">
                        <Span>Name</Span>
                                <Input type="text" name="name"  />
                                {errors.name && touched.name && toast.error("enter your name")}
                        <ErrorMessage name='name' component="div" />
                    </Label>
                    <Label htmlFor="phone">
                        <Span>Number</Span>
                        <Input type="tel" name="number" />
                        <ErrorMessage name='number' component="div" />
                    </Label>
                    <BtnAdd variant='contained' type="submit">Add <PersonAddIcon /></BtnAdd>
                </FormContainer>
                    )
               }
            </Formik>
    
    );
};
