import React, { useState } from 'react';

function PostExample() {
  const [postData, setPostData] = useState({
    title: '',
    completed: false,
    // created: '12:25 pm 18 Jan 2024'
  });

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3001/api/v1/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      console.log('response.status:', response.status);
      console.log('response.statusText:', response.statusText);

      if (response.ok) {
        console.log('Data successfully posted!');
      } else {
        console.error('Failed to post data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Post Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostExample;
