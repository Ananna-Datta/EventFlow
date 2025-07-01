import React, { useState, useContext } from 'react';
import bg from '../assets/Authentication/Authentication.png'; 
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { loginUser,loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await loginUser(email, password);
      toast.success('Login successful!');
      Swal.fire('Success!', 'You are now logged in.', 'success');
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
        <h2 className="text-3xl font-bold text-center text-[#004AAD] mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="w-full py-2 bg-[#004AAD] text-white font-semibold rounded-lg hover:bg-[#003080] transition"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#004AAD] font-medium cursor-pointer">
              Sign up
            </Link>
          </p>
          <div className="text-center">
  <p className="text-sm my-2 text-gray-500">or</p>
  <button
    type="button"
    onClick={async () => {
      try {
        await loginWithGoogle();
        Swal.fire("Success!", "Logged in with Google!", "success");
        navigate("/");
      } catch (err) {
        toast.error(err.message);
      }
    }}
    className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
  >
    <FcGoogle size={22} />
    <span className="font-medium text-sm">Continue with Google</span>
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
