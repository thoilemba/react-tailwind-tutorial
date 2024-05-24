import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaginatedComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("_limit") || 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleNextPage = () => {
    setSearchParams({ page: parseInt(page) + 1, _limit: limit });
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setSearchParams({ page: parseInt(page) - 1, _limit: limit });
    }
  };

  return (
    <div>
      {loading
        ? <p>Loading...</p>
        : (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.id}. {item.title}</li>
            ))}
          </ul>
        )}
      <div>
        <button onClick={handlePreviousPage} disabled={page <= 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedComponent;
