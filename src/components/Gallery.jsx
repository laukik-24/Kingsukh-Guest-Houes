import React from "react";
import GalleryUI from "./ui/Gallery-ui";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-gray-50">
      <p className="uppercase text-center font-semibold tracking-wider text-md text-gray-600">
        Gallery <span>----------</span>
      </p>
      <GalleryUI />
    </div>
  );
};

export default Gallery;
