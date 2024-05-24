import React, { useState, useRef} from 'react';

const PostExample2 = (  {onDataUpdate} ) => {
  const textInputRef = useRef(null);
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {
      // Get the current value of the input field using useRef
      const inputText = textInputRef.current.value;
      console.log(inputText);
      // Check if the input text is not empty
      if (!inputText) {
        console.error('Input field cannot be empty.');
        return;
      }

      // Prepare the data to be sent in the POST request
      const data = {
        title: inputText,
        completed: false,
      };

      // Make the POST request
      const response = await fetch('http://127.0.0.1:3001/api/v1/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers as needed
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If you expect a JSON response from the server, you can parse it
      const responseData = await response.json();
      console.log('Response data:', responseData);

       // Set the response data in the state, triggering a re-render
       onDataUpdate(responseData);
       // Clear the input field
       textInputRef.current.value="";
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      Enter Text:
      <input
        type="text"
        id="textInput"
        ref={textInputRef} // Attach the ref to the input field
        required
      />
      <button type="button" onClick={postData}>
        Submit
      </button>
    </div>
  );
};

export default PostExample2;
