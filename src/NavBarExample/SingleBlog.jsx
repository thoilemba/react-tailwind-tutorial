import { useParams } from "react-router-dom";
import useSWR from "swr";

const SingleBlog = () => {
  const { id } = useParams();

  // Define the fetcher function
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Use SWR to fetch the blog data
  const { data: blogData, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

  if (error) {
    return <div>Error loading data...</div>;
  }

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the blog data in your Article component */}
      <p>Id: {blogData.id}</p>
      <h2>Title: {blogData.title}</h2>
      <p>Body: {blogData.body}</p>
      {/* Other components related to the article */}
    </div>
  );
};

export default SingleBlog;
