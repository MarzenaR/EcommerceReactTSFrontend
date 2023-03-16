import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

 const registerValidation = Yup.object().shape({
    firstname: Yup.string().min(2, "Firstmane must have minimum two letters").required("Firstname is required"),
    surname : Yup.string().min(2, "Surname must have minimum two letters").required("Surname is required"),
    email : Yup.string().email("Email must have a correct format").required("Email is required"),
    username : Yup.string().min(3, "Username must have minimum three letters").required("Username is required"),
    password : Yup.string().min(8, "Password must have minimum eight letters").required("Password is required"),
    repeatPassword : Yup.string().oneOf([Yup.ref('password')], "Passwords must be the same").required("Repeated password is required"),
    terms : Yup.bool().oneOf([true], 'Terms are required!'),
})

export default registerValidation;