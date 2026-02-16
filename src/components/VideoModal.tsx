import React, { useEffect, useRef } from "react";

type VideoModalProps = {
  open: boolean;
  videoUrl: string | null;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ open, videoUrl, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Function to extract YouTube video ID
  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open || !videoUrl) return null;

  const videoId = getYoutubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  if (!embedUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4">
        <button
          className="absolute top-2 sm:top-[20px] sm:right-[20px] right-2"
          onClick={onClose}
          aria-label="Close"
        >
          <img src="/close.svg" alt="" />
        </button>
        <div className="pt-[40px] pb-[20px] px-[20px] sm:p-[60px]">
          <iframe
            src={embedUrl}
            className="w-full h-[300px] lg:h-[400px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
