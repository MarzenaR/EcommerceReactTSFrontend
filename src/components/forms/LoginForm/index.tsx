
// blad 400 po stronie reacta to check
import React from 'react';
import { Field, Form, Formik } from 'formik';
import loginValidation from '../../../validation/loginValidation';
import ILogin from '../../../interfaces/loginInterface';

const initialValues = {
    email : "",
    password : "",
}
//  komponent zawsze ma zwracac to samo czyli JSX.Element !!!!
const LoginForm  = () : JSX.Element => {
    const handleSubmit = async (values: ILogin) => {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");


    const response = await fetch("http://127.0.0.1:8000/auth/login/", {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "password": values.password,
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
              name="email"
              type="email"
              placeholder="email"
            />
            {errors.email && <div>{errors.email}</div>}
           
            <Field
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && <div>{errors.password}</div>}
        
            <button
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button> 
          </Form>
        )}
      </Formik>
    </div>
  );
};   

export default LoginForm;