import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import c from "../FormStyles/FormStyles.module.css";

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const initialValues = {
    email: "",
    password: "",
  };
  const schema = Yup.object().shape({
    email: Yup.string().email("Email format").required("Required"),
    password: Yup.string().min(6, "Too Short!").max(30, "Too Long!"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={c.form} autoComplete="off">
        <div className={c.field}>
          <label className={c.name} htmlFor={emailId}>
            Email
          </label>
          <Field className={c.input} name="email" id={emailId} type="email" />
          <ErrorMessage className={c.error} name="email" component="span" />
        </div>
        <div className={c.field}>
          <label className={c.name} htmlFor={passwordId}>
            Password
          </label>
          <Field
            className={c.input}
            name="password"
            id={passwordId}
            type="password"
          />
          <ErrorMessage
            className={c.error}
            name="password"
            component="span"
          />
        </div>
        <button className={c.formButton} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
