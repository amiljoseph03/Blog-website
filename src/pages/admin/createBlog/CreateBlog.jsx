


import React, { useState } from 'react';
import { database } from '../../../firebase/FirebaseConfig';

import { ref, push, serverTimestamp } from 'firebase/database';

import { useNavigate } from 'react-router-dom';

const CreateBlogUI = () => {
  const [blogs, setBlogs] = useState({
    title: '',
    category: '',
    content: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save blog to Realtime Database
  const addPost = async () => {
    if (!blogs.title || !blogs.category || !blogs.content) {
      return alert('All fields are required!');
    }

    try {
      // Push new blog entry to "blogs" node
      const blogsRef = ref(database, 'blogs');
      await push(blogsRef, {
        title: blogs.title,
        category: blogs.category,
        content: blogs.content,
        time: serverTimestamp(), // stores timestamp in Firebase
      });

      alert('Blog saved successfully!');
      setBlogs({ title: '', category: '', content: '' }); // reset form
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    }
  };

  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ✏️ Create New Blog
        </h2>

        <form className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Blog Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full border border-gray-300 rounded-lg p-2 text-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <div className="mt-4 rounded-lg w-full h-60 bg-gray-200 flex justify-center items-center text-gray-400">
              <img
                alt="Preview"
                className="mt-4 rounded-lg w-full h-60 object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Blog Title
            </label>
            <input
              value={blogs.title} // FIXED
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Enter your blog title"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={blogs.category}
              onChange={handleChange}
              placeholder="Enter blog category"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="content"
              value={blogs.content}
              onChange={handleChange}
              placeholder="Write your blog content..."
              rows="6"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="button"
              onClick={addPost}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              🚀 Publish Blog
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Go to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogUI;

