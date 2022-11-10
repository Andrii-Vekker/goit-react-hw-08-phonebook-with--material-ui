import styled from 'styled-components';
import {Form, Field } from 'formik';



export const FormContainer = styled(Form)`
display: flex;
margin: 0 auto;
margin-top: 10%;
flex-direction: column;
border: 1px solid black;
border-radius: 4px;
 padding: 16px;
width: 30%;
`;

export const BtnAdd = styled.button`
display: inline-block;
justify-content: flex-end;
margin: 0 auto;
width: 30%;
height: 25px;
:hover{
    background-color:skyblue;
    color: white;
    border: none;
    word-wrap: break-word
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
width: 60%;
`



