import * as Yup from "yup";

 const LoginSchema = Yup.object({
  //name: Yup.string().min(2).max(25).required("Please enter your name"),
  userID: Yup.string().min(5).required("Please check your user id"),
  password: Yup.string().min(6).required("Please enter your password"),
  /*confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),*/
});
 export default LoginSchema;
 