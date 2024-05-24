import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaginatedLink = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("_limit")) || 10;

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
        {page > 1 && (
          <Link to={`?page=${page - 1}&_limit=${limit}`}>Previous </Link>
        )}
        <Link to={`?page=${page + 1}&_limit=${limit}`}>Next</Link>
      </div>
    </div>
  );
};

export default PaginatedLink;
