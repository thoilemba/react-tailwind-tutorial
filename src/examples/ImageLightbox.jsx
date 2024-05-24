import { useState } from "react";

const ImageLightbox = ({ image }) => {
  const [open, setOpen] = useState(false);

  const openLightbox = () => {
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        src={image}
        alt=""
        width="1980"
        height="1080"
        onClick={openLightbox}
        className="w-full h-32 md:h-60 object-cover cursor-pointer"
      />

      {open && (
        <dialog className="w-full h-full max-h-[80vh] flex justify-center items-center transition duration-300 fixed inset-0 bg-black   bg-opacity-80 scale-100">
          <div>
            <button onClick={closeLightbox} className="absolute top-0 right-0 px-2 pb-2 text-4xl bg-gray-800 text-white">
              &times;
            </button>
            {/* <div className="relative max-w-4xl max-h-[85vh] z-20 mx-auto my-20 h-auto"> */}
            <div className="relative block w-full h-full max-h-[70vh]  mx-auto aspect-auto rounded-sm md:max-h-[90vh]">
              <img src={image} alt="" className=" w-full h-full max-h-[70vh] object-contain" />
            </div>

          </div>
        </dialog>
      )}
    </div>
  );
};

export default ImageLightbox;
