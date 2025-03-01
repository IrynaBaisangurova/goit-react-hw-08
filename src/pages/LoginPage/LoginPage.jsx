import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector } from "react-redux";
import { selectIsError } from "../../redux/auth/selectors";

export default function LoginPage() {
  const isError = useSelector(selectIsError);
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {isError && <ErrorMessage />}
    </div>
  );
}
