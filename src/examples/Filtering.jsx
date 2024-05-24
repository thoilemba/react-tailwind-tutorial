import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Filtering = () => {
  const { data: todos, error } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!todos) {
    return <div>Loading...</div>;
  }

  // Filter the data into completed and pending lists
  const completedList = todos.filter((task) => task.completed);
  const pendingList = todos.filter((task) => !task.completed);

  return (
    <div>
      <h2 className='text-3xl'>Completed Tasks:</h2>
      <ul>
        {completedList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <h2 className='text-3xl'>Pending Tasks:</h2>
      <ul>
        {pendingList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filtering;
