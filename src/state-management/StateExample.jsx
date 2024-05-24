import { sculptureList } from './data';
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasMore = index < sculptureList.length - 1;
  let hasPrev = index > 0;

  function handleNextClick() {
    if(hasMore){
       setIndex(index + 1); 
    }
    console.log(index);
  }

  function handlePrevClick() {
    if(hasPrev){
       setIndex(index - 1); 
    }
    console.log(index);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <br></br>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
