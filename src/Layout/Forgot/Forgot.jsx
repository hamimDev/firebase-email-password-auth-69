import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Firebase/Fisebase';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        alert('Please Forgot your Password so check your email.')
    })
    .catch(error=>{
        console.error(error);
    })

    try {
      // Simulate form submission or integrate with your backend for sending reset password email
      // Here you can add your logic for handling the forgot password functionality
      // For this example, let's just display a message
      setMessage(`An email has been sent to ${email} with instructions to reset your password.`);

      // Reset the email input after successful submission
      setEmail('');
    } catch (error) {
      // Handle any errors
      console.error('Error submitting form:', error);
      setMessage('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto  px-4 mt-[20%] bg-slate-300 p-5 shadow-2xl rounded-xl ">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      {message && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <h1 className="mt-5">
            <small>If you remember the password so Please</small>
            <Link to="/Login">
              <button className="text-blue-800 hover:text-blue-500 font-semibold ml-1">
                Log In
              </button>
            </Link>
            .
          </h1>
      </form>
    </div>
  );
}

export default Forgot;
