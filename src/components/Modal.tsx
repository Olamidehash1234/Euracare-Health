import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  onDownload,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed max-w-[2500px] mx-auto inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 lg:px-[80px]"
      onClick={onClose}
    >
      <div
        className="bg-[#193C67] text-white rounded-xl w-full p-6 md:p-10 text-center space-y-5 relative z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center lg:mb-[40px]">
          <div className="">
            <img src="/icon/checkmark.svg" alt="" />
          </div>
        </div>
        <h2 className="text-xl lg:text-[48px] mb-[20px] lg:leading-[68px]">
          Your Test Result is Ready
        </h2>
        <p className="text-sm lg:pb-[80px] lg:text-[20px] text-white">
          Click on the download Button to download your result.
        </p>
        <button
          onClick={onDownload}
          className="bg-white lg:text-[14px] text-[#031D3D] rounded-full px-6 py-2 font-medium hover:bg-gray-100 transition"
        >
          Download Result
        </button>
        <button
          onClick={onClose}
          className="absolute top-4 right-[40px] text-white hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ResultModal;
