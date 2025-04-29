import React, { useState } from "react";
import InputBox from "../components/InputBox";
import googleIcon from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa"; 

const UserAuth = ({ type }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (type === "sign-in") {

        console.log("Signing in with:", formData.email, formData.password);

        navigate("/dashboard");
      } else {

        console.log("Signing up with:", formData);
        navigate("/welcome");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-4 px-[5vw] md:px-[7vw] lg:px-[10vw]">
      <form
        className="w-[80%] max-w-[400px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type === "sign-in" ? "Welcome Back" : "Join Us Today"}
        </h1>

        {type !== "sign-in" && (
          <InputBox
            name="fullname"
            type="text"
            placeholder="Full Name"
            icon={<FaUser />}
            value={formData.fullname}
            onChange={handleChange}
          />
        )}

        <InputBox
          name="email"
          type="text"
          placeholder="Email"
          icon={<FaEnvelope />}
          value={formData.email}
          onChange={handleChange}
        />

        <InputBox
          name="password"
          type="password"
          placeholder="Password"
          icon={<FaKey />}
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <button
             className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 mt-14 mx-auto block"
            type="submit"
        >
            {type.replace("-", " ")}
        </button>

        <div className="relative w-full items-center flex gap-2 my-10 uppercase text-black font-bold">
          <hr className="w-1/2 border-black opacity-10" />
          <p className="text-black opacity-50">or</p>
          <hr className="w-1/2 border-black opacity-10" />
        </div>

        <button
          type="button"
          className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[90%] center"
        >
          <img src={googleIcon} className="w-5" alt="Google Icon" />
          Continue with Google
        </button>

        {type === "sign-in" ? (
          <p className="mt-6 text-gray-500 text-xl text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="underline text-black text-xl ml-1"
            >
              Join Us Today
            </Link>
          </p>
        ) : (
          <p className="mt-6 text-gray-500 text-xl text-center">
            Already a member?
            <Link
              to="/signin"
              className="underline text-black text-xl ml-1"
            >
              Sign In here
            </Link>
          </p>
        )}
      </form>
    </section>
  );
};

export default UserAuth;