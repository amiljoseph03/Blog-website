// import React, { useState } from 'react';

// const CreateBlog = () => {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [content, setContent] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       title,
//       category,
//       image,
//       content,
//     });
//     alert('Blog Created Successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           ✏️ Create New Blog
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Blog Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full border border-gray-300 rounded-lg p-2 text-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//             {image && (
//               <img
//                 src={image}
//                 alt="Preview"
//                 className="mt-4 rounded-lg w-full h-60 object-cover shadow-md"
//               />
//             )}
//           </div>

//           {/* Title */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Blog Title
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your blog title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Category
//             </label>
//             <input
//               type="text"
//               placeholder="Enter blog category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           {/* Description / Content */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Description
//             </label>
//             <textarea
//               placeholder="Write your blog content..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows="6"
//               required
//               className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
//             >
//               🚀 Publish Blog
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;



















import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';


const CreateBlogUI = () => {

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // creates a temporary URL for preview
    }
  };


  // ... 

  const[blogs,setBlogs]=useState({
    title:"",
    category : "",
    content : "",
    time : Timestamp.now(),
  })




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
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              className="block w-full border border-gray-300 rounded-lg p-2 text-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <div className="mt-4 rounded-lg w-full h-60 bg-gray-200 flex justify-center items-center text-gray-400">
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-4 rounded-lg w-full h-60 object-cover"
                />
              )}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Blog Title
            </label>
            <input
              type="text"
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
              placeholder="Enter blog category"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Description / Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Write your blog content..."
              rows="6"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              🚀 Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogUI;
