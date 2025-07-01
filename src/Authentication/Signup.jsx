import React, { useState, useContext } from 'react';
import bg from '../assets/Authentication/Authentication.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const { createNewUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!form.name || !email || !password || !form.photo) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await createNewUser(email, password);
      toast.success('Signup successful!');
      Swal.fire('Success!', 'Account created successfully!', 'success');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      Swal.fire('Success!', 'Signed up with Google!', 'success');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl w-full max-w-md ml-96 -mr-96">
        <h2 className="text-3xl font-bold text-center text-[#004AAD] mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={form.photo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              placeholder="https://your-photo-url.com"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#004AAD] text-white font-semibold rounded-lg hover:bg-[#003080] transition"
          >
            Sign Up
          </button>

          {/* Google Signup Button */}
          <div className="text-center">
            <p className="text-sm my-2 text-gray-500">or</p>
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <FcGoogle size={22} />
              <span className="font-medium text-sm">Continue with Google</span>
            </button>
          </div>

          {/* Link to Login */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-[#004AAD] font-medium cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
