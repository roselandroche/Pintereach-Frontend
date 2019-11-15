import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const Register = ({ values, touched, errors }) => {
  return (
    <div className="register">
      <div className="illustration">
        <img width="300px" src="img/register-illustration.svg" alt="lighthouse illustration" />
      </div>
      <Form>
        <Field
        className="styled-input"
          name="email"
          value={values.email}
          placeholder="email"
          type="text"
        />
        {touched.email && errors.email && ( <p className="error">{errors.email}</p>)}
        <Field
        className="styled-input"
          name="password"
          value={values.password}
          placeholder="password"
          type="password"
          />
          {touched.password && errors.password && ( <p className="error">{errors.password}</p>)}
        <button className="primary-button" type="submit">Sign up</button>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    }
  },
  
  handleSubmit(values) {
    console.log(values);
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),


})(Register);

export default FormikRegister;
