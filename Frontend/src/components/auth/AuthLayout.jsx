import PropTypes from "prop-types";

const AuthLayout = ({ title, children, image }) => {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex items-center justify-center px-10 py-12 lg:px-16">
            <div className="w-full max-w-[430px]">

              {/* Heading */}
              <h1 className="text-[58px] font-bold text-center text-[#0B6AAE]">
                {title}
              </h1>

              {/* Space between heading and form */}
              <div className="mt-10">
                {children}
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex p-5">
            <img
              src={image}
              alt="Authentication"
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default AuthLayout;