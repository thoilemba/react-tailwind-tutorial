import React from "react";
import useSWR from "swr";

const HomePage = () => {
  const { data: blogs, error: blogsError } = useSWR("https://jsonplaceholder.typicode.com/users");

  if (blogsError) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading blogs</div>;
  if (!blogs) return <div className="animate-pulse">Loading for posts...</div>;

  return (
    <div>
      <h1 className='font-bold text-2xl'>Posts:</h1>
      <pre>
        {JSON.stringify(blogs, null, 2)}
      </pre>
    </div>
  );
};

export default HomePage;
