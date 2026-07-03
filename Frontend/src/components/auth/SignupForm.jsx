import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

import { days, months, years } from "../data/dateOptions";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    day: "Day",
    month: "Month",
    year: "Year",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
     className="w-full flex flex-col gap-6 mt-4"
    >
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-5">
        <Input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Select
          name="day"
          value={formData.day}
          options={days}
          onChange={handleChange}
        />

        <Select
          name="month"
          value={formData.month}
          options={months}
          onChange={handleChange}
        />

        <Select
          name="year"
          value={formData.year}
          options={years}
          onChange={handleChange}
        />
      </div>

      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <div className="pt-2">
        <Button type="submit">
          Create Account
        </Button>
      </div>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-sky-600 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;