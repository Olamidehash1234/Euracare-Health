import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SearchSuggestions from './SearchSuggestions';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestions = [
  {
    title: 'Balloon valvuloplasty',
    description: 'Minimally invasive heart procedure',
  },
  {
    title: 'Private IGRA Testing For Arthritis',
    description: 'Specialist arthritis testing',
  },
  {
    title: 'Thermal Threshold Testing (TTT)',
    description: 'Neurological diagnostic test',
  },
  {
    title: 'Steroid injections for joint pain',
    description: 'Pain management treatment',
  },
  {
    title: 'Private Allergy, Asthma & Immunology Care',
    description: 'Specialist allergy care',
  },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      <div
        className="absolute top-[158px] bottom-0 lg:top-[213px] left-0 right-0 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-t-[30px] bg-[#F8F8F8] h-full max-w-[2500px] mx-auto overflow-y-auto scrollbar-hide">
          <div className="">
            {/* Header with close button */}
            <div className="flex justify-end pt-[20px] pb-[0px] px-[16px] lg:px-[20px]">
              <button
                onClick={onClose}
                className="flex items-center gap-[10px]"
              >
                Close
                <img src="/close-square.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* Main content */}
            <div className="py-[20px] px-[16px] lg:py-[60px] lg:px-[80px]">
              {/* Search Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-[24px] lg:left-[40px] flex items-center">
                  <img src="/home/search.svg" alt="" />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder=""
                  className="w-full h-[56px] lg:h-[72px] lg:pl-[90px] pl-[52px] pr-4 border-[1px] border-[#ADB4BF] rounded-full bg-white lg:text-[16px] text-[#02070D] placeholder-[#0C2141] font-medium shadow-black/10 focus:outline-none focus:border-[#0C2141]"
                  autoFocus
                />
              </div>

              {/* Search Suggestions */}
              <SearchSuggestions
                searchTerm={searchTerm}
                suggestions={suggestions}
                // Optionally handle onSelect
              />

              
                <div className="mt-[40px] lg:mt-[20px] max-w-[864px]">
                  <h3 className="text-[14px] leading-[20px] lg:text-[16px] font-medium text-[#02070D] mb-[20px] uppercase">
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2 lg:gap-[20px]">
                    {['Cancer Treatment', 'Diabetes', 'Surgery', 'Antenatal Care'].map(
                      (term) => (
                        <button
                          key={term}
                          className="bg-[#0C2141] px-5 flex py-2 align-center lg:px-[25px] lg:py-[15px] rounded-full border border-[#0C2141] gap-[8px] text-[14px] lg:text-[16px] text-white hover:text-white transition-colors"
                        >
                          <img src="/search.svg" alt="" />
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};




const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

// Add style tag to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default SearchModal;
