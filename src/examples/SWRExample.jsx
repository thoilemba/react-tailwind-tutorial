import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const SWRExample = () => {
  const { data, error } = useSWR('https://fakestoreapi.com/products', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>

    // <div>
    //   {/* <main> */}
    //     <h1>Data fetching with useSWR: </h1>
    //     <Products data={data} />
    //   {/* </main> */}
    // </div>
  );
};

export default SWRExample;


// const Products = ({ data }) => {
//   // console.log(data);
//   const displayedProducts = data.map((product) => (
//     <ProductItem key={product.id} product={product} />
//   ));
//   return (
//     <div>
//       <h3>Available Products</h3>
//       {displayedProducts}
//     </div>
//   );
// };

// const ProductItem = ({ product }) => {
//   return (
//     <>
//       <section>
//         <p>{product.title}</p>
//       </section>
//     </>
//   );
// };
