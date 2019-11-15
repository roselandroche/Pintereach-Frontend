import React from "react";
import { withFormik, Form, Field } from "formik";

const Register = ({ values, handleChange }) => {
  return (
    <div className="register">
      <div className="illustration">
        <img width="300px" src="img/register-illustration.svg" alt="" />
      </div>
      <Form>
        <Field
          name="email"
          value={values.email}
          placeholder="email"
          type="text"
          onChange={handleChange}
        />
        <Field
          name="password"
          value={values.password}
          placeholder="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(Register);

export default FormikRegister;
