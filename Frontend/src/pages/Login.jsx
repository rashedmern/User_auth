import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

import authImage from "../assets/images/authImage.jpg";

const Login = () => {
  return (
    <AuthLayout
      title="Sign In"
      image={authImage}
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;