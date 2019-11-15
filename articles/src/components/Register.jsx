import React from "react";
import { withFormik, Form } from "formik";


const Register = () => {
  return (
    <div className="register">
      <div className="illustration">
        <img width="300px" src="img/register-illustration.svg" alt="" />
      </div>
      <form>
          <input placeholder="email" type="text"/>
          <input placeholder="password" type="password"/>
          <button>Sign up</button>
      </form>
    </div>
  );
};

const FormikRegister = withFormik({
    mapPropsValues({email, password}){
        return {
            email: email || '',
            password: password || ''
        }
    }

})(Register)

export default FormikRegister
