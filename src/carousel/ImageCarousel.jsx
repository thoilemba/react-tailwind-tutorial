import * as React from "react";

function ImageCarousel () {
  const [index, setIndex] = React.useState(0);
  const total = slides.length;

  const handlePrevSlide = () => setIndex(index === 0 ? total - 1 : index - 1);
  const handleNextSlide = () => setIndex(index === total - 1 ? 0 : index + 1);

  React.useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, [index, total, handleNextSlide]);

  return (
    <React.Fragment>
      <div className="relative w-full max-h-[20rem] mx-auto aspect-video overflow-hidden sm:max-h-[24rem] md:max-h-[28rem] bg-gray-900">
        <button
          className="z-10 absolute top-1/2 -translate-y-1/2 p-2 bg-white rounded-md transition hover:ring-2 focus:outline-none focus:ring-2 left-1"
          onClick={handlePrevSlide}
        >
          Prev
        </button>
        <button
          className="z-10 absolute top-1/2 -translate-y-1/2 p-2 bg-white rounded-md transition hover:ring-2 focus:outline-none focus:ring-2 right-1"
          onClick={handleNextSlide}
        >
          Next
        </button>
        {slides.map((slide, idx) => {
          let position = "translate-x-full";
          if (idx === index) position = "opacity-100 translate-x-0";
          if (idx === index - 1 || (index === 0 && idx === total - 1)) { position = "-translate-x-full"; }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-white opacity-0 transition duration-300 ${position}`}
            >
              <div className="w-full h-full bg-gray-900 text-white grid place-items-center">
                {slide.title}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ImageCarousel;

const slides = [
  { id: 1, title: "Slide One", url: "", src: "" },
  { id: 2, title: "Slide Two", url: "", src: "" },
  { id: 3, title: "Slide Three", url: "", src: "" },
  { id: 4, title: "Slide Four", url: "", src: "" },
  { id: 5, title: "Slide Five", url: "", src: "" },
];
