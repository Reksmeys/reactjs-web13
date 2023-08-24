import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const pwdRules = /[a-z]/;
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required field"),
    password: yup.string().min(4).matches(pwdRules, {message: "Please create a stronger password"}).required("Password is required field")
})