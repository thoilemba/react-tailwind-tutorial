import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const QueryParamExample = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const userIdParam = searchParams.get("userId");
    setSelectedUserId(userIdParam);
  }, [searchParams]);

  const fetchUserPosts = (userId) => `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const fetchAllPosts = "https://jsonplaceholder.typicode.com/posts";

  const { data: posts, isValidating, error } = useSWR(
    selectedUserId !== null ? fetchUserPosts(selectedUserId) : fetchAllPosts,
    fetcher
  );

  const handleButtonClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <div>
        <p className='text-2xl font-bold text-slate-600'>Posts</p>
        <ul className='grid grid-cols-2 font-semibold text-slate-600 gap-x-8 gap-y-2 pt-2 md:flex md:flex-row md:space-x-5 md:pt-6'>
          <li>
            <button onClick={() => handleButtonClick(null)} className={selectedUserId === null ? "bg-blue-500 text-white" : ""}>
              All
            </button>
          </li>
          {[1, 2, 3, 4, 5].map((userId) => (
            <li key={userId}>
              <button
                onClick={() => handleButtonClick(userId)}
                className={selectedUserId === userId ? "bg-blue-500 text-white" : ""}
              >
                User {userId} posts {isValidating && selectedUserId === userId && "(Loading...)"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Posts:</h3>
        {isValidating && <p>Loading...</p>}
        {!isValidating && !error && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
        {error && <p>Error loading posts</p>}
      </div>
    </div>
  );
};


// Without using searchParams

// import { useState } from "react";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export const QueryParamExample = () => {
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const fetchUserPosts = (userId) => `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
//   const fetchAllPosts = "https://jsonplaceholder.typicode.com/posts";

//   const { data: posts, error } = useSWR(
//     selectedUserId !== null ? fetchUserPosts(selectedUserId) : fetchAllPosts,
//     fetcher
//   );

//   const handleButtonClick = (userId) => {
//     setSelectedUserId(userId);
//   };

//   if (error) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading blogs</div>;
//   if (!posts) return <div>Loading for posts...</div>;

//   return (
//     <div>
//       <div>
//         <p className='text-2xl font-bold text-slate-600'>Posts</p>
//         <ul className='grid grid-cols-2 font-semibold text-slate-600 gap-x-8 gap-y-2 pt-2 md:flex md:flex-row md:space-x-5 md:pt-6'>
//           <li>
//             <button onClick={() => handleButtonClick(null)}>All</button>
//           </li>
//           {[1, 2, 3, 4, 5].map((userId) => (
//             <li key={userId}>
//               <button onClick={() => handleButtonClick(userId)}>User {userId} posts</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Posts:</h3>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };