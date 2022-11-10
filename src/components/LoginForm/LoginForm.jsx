import { Formik, ErrorMessage  } from 'formik';
import { FormContainer, BtnAdd, Label, Span, Input } from './LoginForm.style';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

const schema = yup.object().shape({
    email:yup.string().required("Please enter your email"),
    password:yup.string().required("Please enter your password"),
    
});

const initialValues = {
    email: "",
    password: ""
};

export default function LoginForm() {
   
    const dispatch = useDispatch()
    
    const handleSubmit = (values, { resetForm }) => {
        dispatch(loginUser(values))
        resetForm()
    };
    
    return (
        <>
        <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
            <FormContainer autoComplete="off">
                              <Label htmlFor="email">
                  <Span>Email</Span>
                        <Input type="email" name="email" autoComplete="off"/>
                    <ErrorMessage name='email' component="div"/> 
            </Label>
            <Label htmlFor="password">
                  <Span>Password</Span>
                        <Input type="password" name="password" autoComplete="off"/>
                    <ErrorMessage name='password' component="div"/> 
                </Label>
                    <BtnAdd type="submit">Login</BtnAdd>
            </FormContainer>
            </Formik>
            </>
    );
};


