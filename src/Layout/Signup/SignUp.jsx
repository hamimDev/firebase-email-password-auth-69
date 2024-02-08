import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../Firebase/Fisebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth(app);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    setSuccess("");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const signUpUser = result.user;
        
        setError("");
        event.target.reset();
        setSuccess("create account successfully");
        handleEmailVerification(result.user);
      })
      .catch((error) => {
        
        setError(error.message);
      });
    const handleEmailVerification = (user) => {
      sendEmailVerification(user)
      .then(result=>{
        alert('Please verify your email address so check your email.')
      })
      .catch(error=>{
        console.error(error);
      })
    };
  };

  return (
    <div className="mt-[58px] lg:mt-[87px] bg-gray-100 h-screen flex justify-center items-center rounded-xl">
      <div className="bg-white p-8 rounded shadow-md lg:w-[40%] h-auto">
        <h1 className="text-blue-800">{success}</h1>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 block lg:w-[60%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-6">
            <p className="text-red-800">{error}</p>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 p-2 pr-10 block lg:w-[60%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />

              <span
                className="absolute inset-y-0 lg:right-56 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <h1>
                    <img
                      className="w-5"
                      src="https://cdn-icons-png.freepik.com/256/3926/3926043.png?ga=GA1.1.540724036.1706111289&semt=ais"
                      alt=""
                    />
                  </h1>
                ) : (
                  <h1>
                    <img
                      className="w-5"
                      src="https://cdn-icons-png.freepik.com/256/5340/5340151.png?ga=GA1.1.540724036.1706111289&semt=ais"
                      alt=""
                    />
                  </h1>
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <h1 className="mt-10">
            <small>Already have an account</small>
            <Link to="/Login">
              <button className="text-blue-800 hover:text-blue-500 font-semibold ml-1">
                Log In
              </button>
            </Link>
            .
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
