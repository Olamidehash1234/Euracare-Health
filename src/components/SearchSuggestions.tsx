import React from 'react';

interface Suggestion {
  title: string;
  description?: string;
}

interface SearchSuggestionsProps {
  searchTerm: string;
  suggestions: Suggestion[];
  onSelect?: (suggestion: Suggestion) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  searchTerm,
  suggestions,
  onSelect,
}) => {
  if (!searchTerm) return null;

  const filteredSuggestions = suggestions.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-[10px] bg-[#F8F8F8] max-h-[340px] overflow-y-auto rounded-[48px] border border-[#0C2141] p-4 lg:p-[30px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {filteredSuggestions.length > 0 ? (
        <div className="space-y-[10px] lg:space-[20px]">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => onSelect?.(suggestion)}
              type="button"
            >
              <div className="text-[16px] flex gap-[10px] lg:gap-[20px] font-medium text-[#02070D]">
                <img src="/search-b.svg" alt="" />
                {suggestion.title}
              </div>
              {/* <div className="text-[14px] text-[#626F82]">
                {suggestion.description}
              </div> */}
            </button>
          ))}
        </div>
      ) : (
        <div className="py-[0px] lg:pl-[60px] lg:py-[20px]">
          <p className="text-[24px] lg:text-[40px] text-[#02070D] font-medium lg:leading-[44px]">
            No results found for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
