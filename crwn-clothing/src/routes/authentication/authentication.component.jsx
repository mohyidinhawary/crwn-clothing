import SignInForm from "../../components/sign-in-form/sign-in.component";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
    </div>
  );
};

export default Authentication;
