import styled from 'styled-components';
import {Form, Field } from 'formik';
import { Button } from '@mui/material';


export const FormContainer = styled(Form)`
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 4px;
 padding: 16px;
width: 400px;
`;

export const BtnAdd = styled(Button)`
display: inline-block;
margin:auto;
width: 30%;
height: 25px;
:hover{
    scale: 1.01;
}

`

export const Label = styled.label`
display: flex; 
flex-direction: column
`

export const Span = styled.span`
font-size: 20px;
margin-bottom: 20px;
`

export const Input = styled(Field)`
margin-bottom: 20px;
width: 200px;
`



