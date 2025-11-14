// import React from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/Footer';

// const blogs = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
//     date: 'Nov 12, 2025',
//     title: 'Exploring React 18: What’s New?',
//     description:
//       'React 18 introduces concurrent rendering, automatic batching, and more features that improve app performance and user experience.',
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
//     date: 'Oct 25, 2025',
//     title: 'Mastering Tailwind CSS for Modern UI Design',
//     description:
//       'Discover how Tailwind CSS empowers developers to create beautiful, responsive, and consistent designs faster than ever.',
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//     date: 'Sep 10, 2025',
//     title: 'Building Full Stack Apps with MERN',
//     description:
//       'Learn how to create a full-stack web application using MongoDB, Express, React, and Node.js with practical examples.',
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
//     date: 'Aug 22, 2025',
//     title: 'Getting Started with AI Chatbots',
//     description:
//       'An introduction to AI chatbot development using NLP techniques, integrating APIs, and enhancing customer interactions.',
//   },
// ];

// const AllBlogs = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16">
//         <h1 className="text-4xl font-bold mb-3">Our Latest Blogs</h1>
//         <p className="text-gray-300 text-lg">
//           Insights, tutorials, and stories from the world of technology and
//           design.
//         </p>
//       </section>

//       {/* Blog Cards Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 {blog.title}
//               </h2>
//               <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
//               <a
//                 href="#"
//                 className="text-indigo-600 font-semibold hover:underline"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AllBlogs;








// src/components/AllBlogs.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
// import { db } from '../../../firebase/FirebaseConfig';
import { database } from '../../firebase/FirebaseConfig';


export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const blogsRef = ref(database, "blogs");

    const unsubscribe = onValue(
      blogsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setBlogs([]);
          setLoading(false);
          return;
        }
        // Convert object map to array
        const list = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // optional: sort by time if you stored timestamps
        list.sort((a, b) => {
          // if time stored as number or firebase timestamp
          const ta = a.time ? (typeof a.time === "object" && a.time.toMillis ? a.time.toMillis() : a.time) : 0;
          const tb = b.time ? (typeof b.time === "object" && b.time.toMillis ? b.time.toMillis() : b.time) : 0;
          return tb - ta;
        });
        setBlogs(list);
        setLoading(false);
      },
      (err) => {
        console.error("Realtime DB read failed:", err);
        setError("Failed to load blogs.");
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => off(blogsRef);
  }, []);

  if (loading) return <p className="p-4">Loading blogs...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  if (blogs.length === 0) return <p className="p-4">No blogs found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
            {/* Image (if you later add imageUrl) */}
            {blog.imageUrl ? (
              <img
                src={blog.imageUrl}
                alt={blog.title || "Blog image"}
                className="w-full h-44 object-cover"
                onError={(e) => { e.currentTarget.src = "/fallback-image.png"; }} // optional fallback
              />
            ) : (
              <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-gray-500">
                No image
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
              <p className="text-gray-700">{(blog.content || "").slice(0, 150)}{(blog.content || "").length > 150 ? "..." : ""}</p>
              {/* Optional: link to detail page */}
              {/* <Link to={`/blog/${blog.id}`} className="text-blue-600">Read more</Link> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
