import useSWR from "swr";

const BlogPage = () => {
  const { data: blogs, error } = useSWR("https://jsonplaceholder.typicode.com/posts");
  // console.log(blogs);
  if (error) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading blogs</div>;
  if (!blogs) return <div>Loading for blogs...</div>;


  return (
    <div>
      <h1 className='font-bold text-2xl'>Products:</h1>
      <pre>
        {JSON.stringify(blogs, null, 2)}
      </pre>
    </div>
  );
};

export default BlogPage;
