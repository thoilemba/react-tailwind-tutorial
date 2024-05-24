import React, { useState, useEffect } from "react";

function FetchExample2() {
  // const url = "https://jsonplaceholder.typicode.com/users";
  const url = 'http://127.0.0.1:3001/api/v1/todos';
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch(url);
      const d = await res.json();
      return setData(d);
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div >
      <h1 style={{ color: "green" }}>Using JavaScript inbuilt Fetch API:</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default FetchExample2;