import flower from "../../assets/flower.jpg";
import mithonDam from "../../assets/mithonDam.webp";
import out from "../../assets/out.jpg";
import palash from "../../assets/palash.webp";
import recep from "../../assets/recep.jpg";
import service from "../../assets/service.jpg";
import small from "../../assets/small.jpg";
import abc from "../../assets/1.jpg";
import baranti from "../../assets/baranti.webp";

export default function GalleryUI() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-10">
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={mithonDam}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center "
            src={flower}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={out}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center "
            src={service}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={palash}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center "
            src={small}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={abc}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={recep}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg object-cover object-center"
            src={baranti}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
}
