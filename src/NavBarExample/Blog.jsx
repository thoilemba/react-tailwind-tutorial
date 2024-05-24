import React from "react";
import { Link } from "react-router-dom";
// import useSWR from "swr";

const GalleryPage = () => {
  // const { data: gallery, error } = useSWR("https://jsonplaceholder.typicode.com/posts")
  // // console.log(blogs);
  // if (error) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading blogs</div>;
  // if (!gallery) return <div>Loading for gallery...</div>;


  return (
    <div>
      {/* <pre>
        {JSON.stringify(gallery, null, 2)}
      </pre> */}
      {/* Images card part */}
      <div className="my-8 mx-6">
        <div className="text-2xl font-semibold text-gray-700">My Blog</div>
        <div className='mt-4 grid md:grid-cols-3 gap-4'>
          {demoImages.map((blog) => (
            <div key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <BlogCard
                  imageSrc={blog.url}
                  date={"7 Feb 2024"}
                  title={blog.title}
                  description={blog.description}
                  category={"LIFESTYLE"}
                />
              </Link></div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default GalleryPage;

const demoImages = [
  { id: 1, title: "Title 1", description: "This is dummy descriptiion 1", url: "https://picsum.photos/1000/800" },
  { id: 2, title: "Title 2", description: "This is dummy descriptiion 2", url: "https://picsum.photos/1000/800" },
  { id: 3, title: "Title 3", description: "This is dummy descriptiion 3", url: "https://picsum.photos/1000/800" },
  { id: 4, title: "Title 4", description: "This is dummy descriptiion 4", url: "https://picsum.photos/1000/800" },
  { id: 5, title: "Title 5", description: "This is dummy descriptiion 5", url: "https://picsum.photos/1000/800" },
];


function BlogCard ({ imageSrc, date, title, description, category }) {
  return (
    <div className="relative w-92 flex flex-col bg-white shadow-md rounded-md cursor-pointer">
      <img src={imageSrc} alt={title} className="w-full h-80 rounded-md object-cover" />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-6">
        <div className="bg-gray-500 bg-opacity-50 rounded-md pl-2">
          <p className="text-white text-sm mt-2">{date}</p>
          <p className="font-bold text-md text-white mb-2">{title}</p>
          <p className="text-white text-sm">{description}</p>
        </div>

      </div>
      <div className="absolute top-4 right-4 bg-gray-500 opacity-50 rounded-md">
        <p className=" text-white text-xs p-1">{category}</p>
      </div>

    </div>
  );
}
