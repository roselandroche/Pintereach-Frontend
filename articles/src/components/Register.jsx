import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { registerUser } from '../action/register'

const Register = ({ values, touched, errors }) => {

  return (
    <div className="register">
      <div className="illustration">
        <img width="300px" src="img/register-illustration.svg" alt="lighthouse illustration" />
      </div>
      <Form>
        <Field
        className="styled-input"
          name="username"
          value={values.username}
          placeholder="username"
          type="text"
        />
        {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
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
  mapPropsValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  }),
  
  handleSubmit(values, formikBag) {
    console.log(formikBag)
    formikBag.props.registerUser(values)
    formikBag.resetForm({username:'', password:''})
  },

})(Register);

export default connect(null, {registerUser})(FormikRegister);