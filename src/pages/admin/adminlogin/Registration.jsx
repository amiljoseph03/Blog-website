import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../../firebase/FirebaseConfig';
import { ref, set } from 'firebase/database';

const AdminRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // 1️⃣ Create the user in Firebase Auth
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = result.user.uid;

      // 2️⃣ Store admin details in Realtime Database
      await set(ref(database, 'admins/' + uid), {
        email: email,
        createdAt: new Date().toISOString(),
      });

      alert('Registration successful!');

      // 3️⃣ Store session in localStorage
      localStorage.setItem('admin', JSON.stringify(result.user));

      navigate('/dashboard');
    } catch (error) {
      console.error('Registration Error:', error);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register 
        </h2>

        <form className="space-y-6" onSubmit={register}>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Register
          </button>

          <p
            className="text-center mt-4 text-blue-600 cursor-pointer"
            onClick={() => navigate('/adminlogin')}
          >
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
