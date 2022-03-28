import { useRef, useState } from "react";

function Video(props) {
  const { title, description, id, thumbnail_large } = props;
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const url = `https://player.vimeo.com/video/${id}`;

  const toggleModal = () => {
    const video = videoRef?.current;
    video.setAttribute("src", url);
    setModalOpen(!modalOpen);
  };

  const modalClasses = modalOpen
    ? "fixed z-20 inset-0 overflow-y-auto"
    : "hidden fixed z-20 inset-0 overflow-y-auto";

  return (
    <div className="grid gap-x-8 mx-6 sm:mx-24 pb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Title and Description */}
      <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
        <h2 className="text-blackish">{title}</h2>
        <p
          className="max-h-80 overflow-scroll text-blueish mb-10 md:mb-0"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      {/* Thumbnail, video, and modal */}
      <div className="justify-self-center md:justify-self-end">
        <div>
          <div
            className="gradient-overlay overflow-hidden rounded-lg cursor-pointer"
            onClick={toggleModal}
          >
            <img
              className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="/img/playbtn.png"
              alt="play button"
            />
            <img
              className="rounded-lg h-auto"
              src={thumbnail_large}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div tabIndex="-1" aria-hidden="true" className={modalClasses}>
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden={!modalOpen}
          onClick={toggleModal}
        ></div>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block align-bottom overflow-hidden">
          <iframe
            width="960"
            height="550"
            src={url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            ref={videoRef}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        .gradient-overlay {
          position: relative;
        }

        .gradient-overlay::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#ee2e1d, #ffb1b5);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

export default Video;
