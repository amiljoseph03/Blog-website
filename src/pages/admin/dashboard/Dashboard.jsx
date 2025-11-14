import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, onValue, remove } from 'firebase/database';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();

  const admin = {
    name: 'Admin',
    email: 'admin@gmail.com',
    role: 'Admin',
  };

  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch blogs from Firebase
  useEffect(() => {
    const blogsRef = ref(db, 'blogs/');

    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const blogList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBlogs(blogList);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  // ❌ Delete From Firebase
  const handleDelete = (id) => {
    remove(ref(db, 'blogs/' + id))
      .then(() => alert('Blog Deleted'))
      .catch((err) => console.log(err));
  };

  // Logout
  const logout = () => {
    localStorage.clear('admin');
    navigate('/');
  };

  const goToCreateBlog = () => {
    navigate('/createblog');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Admin Details */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Profile</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold text-gray-700">Name:</p>
            <p>{admin.name}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email:</p>
            <p>{admin.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Role:</p>
            <p>{admin.role}</p>
            <br />
            <button
              onClick={goToCreateBlog}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Create Blog
            </button>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ml-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Uploaded Blogs
        </h2>

        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                #
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Thumbnail
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={blog.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 text-sm text-gray-600">{index + 1}</td>

                {/* Thumbnail */}
                <td className="py-3 px-4">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-16 h-12 rounded-md object-cover"
                  />
                </td>

                {/* Title */}
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {blog.title}
                </td>

                {/* Category */}
                <td className="py-3 px-4 text-gray-600">{blog.category}</td>

                {/* Date */}
                <td className="py-3 px-4 text-gray-600">{blog.date}</td>

                {/* Action Buttons */}
                <td className="py-3 px-4 text-center flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Blog count */}
        <div className="mt-4 text-gray-600 text-sm">
          Total Blogs: <span className="font-semibold">{blogs.length}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
