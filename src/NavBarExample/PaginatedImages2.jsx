import useSWR from "swr";
import { useState } from "react";

// ... (imports)

const PaginatedImages2 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: images, error: imagesError } = useSWR("https://api.slingacademy.com/v1/sample-data/photos?limit=50");

  if (imagesError) return <div className='h-96 w-full data-error bg-white rounded-md'>Error loading images</div>;
  if (!images) return <div className="animate-pulse">Loading images...</div>;

  const imagesPerPage = 12;
  const totalPages = Math.ceil(images.photos.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.photos.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3;

    if (totalPages <= maxPageNumbers) {
      // Display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPage === i ? "bg-slate-400 py-1 px-2 rounded-sm" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      // Display consecutive page numbers with ellipsis
      const leftEllipsis = currentPage > 3 ? <span>...</span> : null;
      const rightEllipsis = currentPage < totalPages - maxPageNumbers + 1 ? <span>...</span> : null;

      pageNumbers.push(
        <button key={1} onClick={() => paginate(1)} className={currentPage === 1 ? "bg-slate-400 py-1 px-2 rounded-sm" : ""}>
            1
        </button>
      );
      pageNumbers.push(leftEllipsis);

      for (let i = currentPage; i < currentPage + maxPageNumbers; i++) {
        if (i > 1 && i < totalPages) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => paginate(i)}
              className={currentPage === i ? "bg-slate-400 py-1 px-2 rounded-sm" : ""}
            >
              {i}
            </button>
          );
        }
      }

      pageNumbers.push(rightEllipsis);
      
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={currentPage === totalPages ? "bg-slate-400 py-1 px-2 rounded-sm" : ""}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="p-8">
      <h1 className='font-bold text-2xl'>Images:</h1>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {currentImages.map((image, index) => (
          <img key={image.id} src={image.url} alt={`Image ${index + 1}`} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-6">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <div className="space-x-4">{renderPageNumbers()}</div>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedImages2;


