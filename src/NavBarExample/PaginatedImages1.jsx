import useSWR from "swr";
import { useState, useEffect } from "react";

const PaginatedImages1 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: images, error: imagesError } = useSWR("https://api.slingacademy.com/v1/sample-data/photos?limit=30");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  if (imagesError) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading blogs</div>;
  if (!images) return <div className="animate-pulse">Loading for images...</div>;
  //   console.log(images.photos.length);

  const imagesPerPage = 12;

  // Calculate the index range for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.photos.slice(indexOfFirstImage, indexOfLastImage);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const totalPages = Math.ceil(images.photos.length / imagesPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-8">
      {/* <pre>
        {JSON.stringify(images, null, 2)}
      </pre> */}

      <h1 className='font-bold text-2xl'>Images:</h1>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {/* Display current images */}
        {currentImages.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index + 1}`} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-6">
        {/* Pagination controls */}
        <button onClick={prevPage}>Previous</button>
        <div className="space-x-4">
          {Array.from({ length: Math.ceil(images.photos.length / imagesPerPage) }).map((_, index) => (
            <button 
              key={index} 
              onClick={() => paginate(index + 1)} 
              className={currentPage === index + 1 ? "bg-slate-400 py-1 px-2 rounded-sm" : ""}>
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={nextPage}>Next</button>
      </div>


    </div>
  );
};

export default PaginatedImages1;
