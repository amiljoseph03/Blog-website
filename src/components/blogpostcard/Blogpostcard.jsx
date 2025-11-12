import React from 'react';

const BlogPostSection = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      date: 'November 12, 2025',
      title: 'Exploring the Beauty of Nature',
      description:
        'Discover how spending time in nature can refresh your mind and inspire creativity. A journey into the heart of the wild.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522202195461-5a813ed86b15',
      date: 'November 10, 2025',
      title: 'The Art of Minimal Living',
      description:
        'Learn how simplifying your lifestyle helps you focus on what truly matters. Less clutter, more peace.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      date: 'November 8, 2025',
      title: 'Mastering the Remote Work Lifestyle',
      description:
        'Explore essential habits and productivity tips for thriving in a remote work environment. Balance work and life like a pro.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Latest Blog Posts
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.description}
              </p>

              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostSection;
