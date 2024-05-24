import { useState, useEffect } from 'react';

let count = 1;

const FetchExample = ({ onDataUpdate }) => {
  const [posts, setPosts] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await fetch('http://127.0.0.1:3001/api/v1/todos/');
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetch function
  }, [onDataUpdate]); // The empty [] dependency array ensures that this effect runs only once on component mount

  console.log(count++, posts);

  const deleteTask = async (taskId) => {
    try {
      // Make a POST request to delete a task
      const response = await fetch(`http://127.0.0.1:3001/api/v1/todos/${taskId}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
        // Add any additional headers or body parameters as needed
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Task Deleted successfully:', response.status);
      // Task deleted successfully, update the task list
      fetchData();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Lists of task:</h1>
      <ul>
        {/* {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))} */}

        {posts.map((dataObj, index) => {
          return <p key={index}> {dataObj.id}. {dataObj.title} <button onClick={() => deleteTask(dataObj.id)}>Delete</button></p>;
        })}
      </ul>
    </div>
  );
};

export default FetchExample;
