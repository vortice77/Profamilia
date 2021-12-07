import { Fragment } from "react";
import CustomNavBar from "./components/NavBar";
import CustomFooter from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PasswordForm from "./components/RegisterForm/PasswordForm";

function App() {
  return (
    <Fragment>
      <CustomNavBar />

      <LoginForm />
      <RegisterForm />
      <PasswordForm />

      <CustomFooter />
    </Fragment>
  );
}

export default App;
