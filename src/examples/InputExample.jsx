import { useRef, useState } from "react";

const InputExample = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  
  return (
    <div>
      <input ref = {inputRef} type= "text" className="border-slate-500 border-2 rounded-sm"/>
      <button onClick={() => { setData([...data, inputRef.current.value]); }}>Submit</button>
      {data.map((item, index) => { return <h3 key = {index}>{item}</h3>; })}
    </div>
  );
};

export default InputExample;
