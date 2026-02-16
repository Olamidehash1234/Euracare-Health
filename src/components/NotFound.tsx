import React, { useState } from 'react';

interface NotFoundProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  ctaText?: string;
  onCta?: () => void | Promise<void>;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'Nothing to see here',
  description = "It looks like you haven't defined any roles and permission yet. Once Added, they'll appear here for you to manage.",
  imageSrc = '/not-found.png',
  ctaText = 'Add New',
  onCta,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!onCta) return;
    
    try {
      setIsLoading(true);
      const result = onCta();
      if (result instanceof Promise) {
        await result;
      }
    } catch (error) {
      console.error('Error in NotFound callback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex flex-col border-[1px] rounded-[14px] items-center gap-[20px] justify-center py-[40px] lg:py-[89px] ${className}`}>
      <img src={imageSrc} alt={title} />
      <div className="font-semibold text-center">{title}</div>
      <div className="text-center text-sm text-gray-500 max-w-[250px] lg:max-w-[340px]">{description}</div>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="flex items-center gap-2 px-6 py-2 lg:py-[13px] lg:px-[28px] rounded-full bg-[#0C2141] text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Loading...' : ctaText}
      </button>
    </div>
  );
};

export default NotFound;
