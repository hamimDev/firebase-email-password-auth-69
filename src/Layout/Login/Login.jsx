import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../Firebase/Fisebase";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle the value of showPassword
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    
    // let inputElement = document.getElementById('password');
    

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loginUser = result.user;
        setSuccess("User Login Successfully");
        console.log(loginUser);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        setError(error.message);
        
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8 bg-slate-200 p-5 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Please Log in
          </h2>
          <h1 className=" text-center mt-5 text-blue-800 font-semibold">
            {success}
          </h1>
        </div>
        <form id="myForm" className=" space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 pr-10 block w-[100%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Email address"
              />
            </div>
            <div>
              <h1 className=" mb-2 text-red-800 font-semibold">{error}</h1>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-5 p-2 pr-10 block w-[100%] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  onClick={handleTogglePassword}
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
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              {/* <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a> */}
              <Link to="/forgot" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </span>
              Log in
            </button>
          </div>
          <h4>
            <small>New to this website? </small>
            <Link to="/signup">
              <button className="text-blue-800 hover:text-blue-500 font-semibold">Sign up</button>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
