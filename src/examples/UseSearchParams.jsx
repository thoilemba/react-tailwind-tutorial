import { useState } from "react";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";

const UseSearchParamsExample = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("userId") || "all");

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: posts, error, isValidating } = useSWR(
    category !== "all" ? `https://jsonplaceholder.typicode.com/posts?userId=${category}` : "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  const handleCategoryClick = (newCategory) => {
    setSearchParams({ userId: newCategory });
    setCategory(newCategory);
  };

  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      <div>
        <p className='text-2xl font-bold text-slate-600'>Categories</p>
        <ul className='grid grid-cols-2 font-semibold text-slate-600 gap-x-8 gap-y-2 pt-2 md:flex md:flex-row md:space-x-5 md:pt-6'>
          <li><button className={category === "all" ? "underline underline-offset-4 decoration-yellow-600" : ""} onClick={() => handleCategoryClick("all")}>All</button></li>
          <li><button className={category === "1" ? "underline underline-offset-4 decoration-yellow-600" : ""} onClick={() => handleCategoryClick("1")}>User 1</button></li>
          <li><button className={category === "2" ? "underline underline-offset-4 decoration-yellow-600" : ""} onClick={() => handleCategoryClick("2")}>User 2</button></li>
          <li><button className={category === "3" ? "underline underline-offset-4 decoration-yellow-600" : ""} onClick={() => handleCategoryClick("3")}>User 3</button></li>
          {/* Add more categories as needed */}
        </ul>
      </div>

      {isValidating
        ? (
          <p>Loading...</p>
        )
        : (
          <div>
            {posts && posts.length > 0
              ? (
                <div>
                  {posts.map(post => (
                    <div key={post.id}>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                    </div>
                  ))}
                </div>
              )
              : (
                <p>No posts found for the selected category</p>
              )}
          </div>
        )}
    </div>
  );
};

export default UseSearchParamsExample;
