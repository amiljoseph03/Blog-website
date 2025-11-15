
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
