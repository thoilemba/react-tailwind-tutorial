import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const numbs = [10, 20, 30, 40, 50];

// make any error to this component

const MyErrorComponent = () => {
  // remove some text from the url to make error
  const { data, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  console.log(data);

  if (isLoading) return "Loading...";

  return (
    <div>
      {/* <pre>
        {JSON.stringify(data, 2, 2)};
      </pre> */}

      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.id}. {item.name}
          </div>);
      })}
      {/* make any error here like numbers[3] instead of numbs[3] */}
      <p>{numbs[4]}</p>
    </div>
  );
};

export default MyErrorComponent;
