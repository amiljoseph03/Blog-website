// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AdminLogin() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy admin credentials
//     const adminEmail = 'admin@blogify.com';
//     const adminPassword = 'admin123';

//     if (formData.email === adminEmail && formData.password === adminPassword) {
//       setError('');
//       alert('Login successful!');
//       navigate('/dashboard'); // Redirect to dashboard
//     } else {
//       setError('Invalid email or password!');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Admin Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 text-sm font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Enter admin email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Enter password"
//             />
//           </div>

//           {error && (
//             <p className="text-red-500 text-sm font-medium text-center">
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/FirebaseConfig';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login Error:', error);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>

        <form className="space-y-6" onSubmit={login}>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter admin email"
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
