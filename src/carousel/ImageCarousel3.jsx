import * as React from "react";

function ImageCarousel3 () {
  const [index, setIndex] = React.useState(0);
  const total = slides.length;

  // const handlePrevSlide = () => setIndex(index === 0 ? total - 1 : index - 1);
  const handleNextSlide = () => setIndex(index === total - 1 ? 0 : index + 1);

  React.useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, [index, total, handleNextSlide]);

  return (
    <React.Fragment>
      <div className="relative w-full max-h-[20rem] mx-auto aspect-video overflow-hidden sm:max-h-[24rem] md:max-h-[28rem] bg-gray-900">
        {slides.map((slide, idx) => {
          let position = "translate-x-full";
          if (idx === index) position = "opacity-100 translate-x-0";
          if (idx === index - 1 || (index === 0 && idx === total - 1)) { position = "-translate-x-full"; }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col justify-center items-center bg-white opacity-0 transition duration-300 ${position}`}
            >
              <div className='w-full h-full relative'>
                <div className='w-full h-full relative'>
                  <img className='w-full h-full object-cover' src="https://picsum.photos/1000/800" alt="" />

                  {/* left blur */}
                  <div className='absolute inset-0 h-full flex'>
                    <div className='w-1/6 backdrop-filter backdrop-blur-lg'></div>
                  </div>

                  {/* right blur */}
                  <div className='absolute inset-0 h-full flex'>
                    <div className='w-1/6 ml-auto backdrop-filter backdrop-blur-lg'></div>
                  </div>
                </div>
              </div>
              <div className=" text-white absolute top-60 left-20">
                <p className='text-3xl font-semibold'>{slide.title}</p>
                <p className='text-md mt-2'>05.02.2024 - This is description.</p>
              </div>
              <div className=" text-white text-7xl absolute bottom-10 left-20">
                {slides.map((slide, idx) => {
                  return (
                    <span key={slide.id} className={`${idx === index ? "text-white" : "text-gray-600"}`}>.</span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ImageCarousel3;

const slides = [
  { id: 1, title: "Slide One", url: "https://picsum.photos/1000/800", src: "" },
  { id: 2, title: "Slide Two", url: "https://picsum.photos/1000/800", src: "" },
  { id: 3, title: "Slide Three", url: "https://picsum.photos/1000/800", src: "" },
  { id: 4, title: "Slide Four", url: "https://picsum.photos/1000/800", src: "" },
  { id: 5, title: "Slide Five", url: "https://picsum.photos/1000/800", src: "" },
];
