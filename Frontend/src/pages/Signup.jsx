import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

import authImage from "../assets/images/authImage.jpg";

const Signup = () => {
  return (
    <AuthLayout
      title="Sign Up"
      image={authImage}
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;