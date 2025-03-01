import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector } from "react-redux";
import { selectIsError } from "../../redux/auth/selectors";

export default function RegisterPage() {
  const isError = useSelector(selectIsError);
  return (
    <section>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
      {isError && <ErrorMessage />}
    </section>
  );
}
