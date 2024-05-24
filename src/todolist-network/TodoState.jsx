import { useState } from 'react';
import FetchExample from './FetchExample';
import PostExample2 from './PostExample2';
import FetchExample2 from './FetchExample';
import PostExample from './PostExample2';

// const fetcher = (url) => fetch(url).then(res => res.json())

// Used this component for the Todo-List network app
const TodoState = () => {
  const [responseData, setResponseData] = useState(null);

  const updateData = (newData) => {
    // Function to update the state with new data
    setResponseData(newData);
  };

  return (
    <div>
      <FetchExample  onDataUpdate={updateData} />
      <PostExample2   onDataUpdate={updateData} />

      {/* Below examples does not update UI on adding new task */}

      {/* <FetchExample2/>
      <PostExample/> */}
    </div>
  )
}

export default TodoState