// blad 400 po stronie reacta to check
import React from 'react';
import { Field, Form, Formik } from 'formik';
import registerValidation from '../../../validation/registerValidation';
import IRegister from '../../../interfaces/registerInterface';

const initialValues = {
    firstname : "",
    surname : "",
    email : "",
    username : "",
    password : "",
    repeatPassword: "",
    terms : false,

}
//  komponent zawsze ma zwracac to samo czyli JSX.Element !!!!
const RegisterForm  = () : JSX.Element => {
    const handleSubmit = async (values: IRegister) => {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");


    const response = await fetch("http://127.0.0.1:8000/auth/register/", {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "username": values.username,
        "password": values.password,
        "first_name": values.firstname,
        "last_name": values.surname,
        "email": values.email
      }),
    })

    const user = await response.json();
    console.log(user);
 
}

   
   
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        // validationSchema={registerValidation}
      >
        {({ isSubmitting, errors }) => (
          <Form>
             <Field
              name="firstname"
              type="text"
              placeholder="Firstname"
            />
            {errors.firstname && <div>{errors.firstname}</div>}
             <Field
              name="surname"
              type="text"
              placeholder="Surname"
            />
            {errors.surname && <div>{errors.surname}</div>}
             <Field
              name="email"
              type="email"
              placeholder="email"
            />
            {errors.email && <div>{errors.email}</div>}
            <Field
              name="username"
              type="text"
              placeholder="Username"
            />
            {errors.username && <div>{errors.username}</div>}
            <Field
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && <div>{errors.password}</div>}
            <Field
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
            />
            {errors.repeatPassword && <div>{errors.repeatPassword}</div>}
               <Field
              name="terms"
              type="checkbox"
              placeholder="Accept Terms & Conditions"
      
            />
          {errors.terms && <div>{errors.terms}</div>}
            <button
              type="submit"
              disabled={isSubmitting}  
            >
              Register
            </button> 
          </Form>
        )}
      </Formik>
    </div>
  );
};   

export default RegisterForm;