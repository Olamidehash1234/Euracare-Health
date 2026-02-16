/**
 * timeAgo formatter
 * Returns a human friendly relative time string like:
 * "posted a week ago", "posted 2 mins ago", "posted yesterday"
 */
export const timeAgo = (isoDate?: string | null): string => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return '';

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHr / 24);

  if (diffSec < 60) {
    return `posted ${diffSec <= 1 ? 'just now' : `${diffSec} sec${diffSec>1?'s':''} ago`}`;
  }

  if (diffMin < 60) {
    if (diffMin === 1) return 'posted a minute ago';
    return `posted ${diffMin} mins ago`;
  }

  if (diffHr < 24) {
    if (diffHr === 1) return 'posted an hour ago';
    return `posted ${diffHr} hrs ago`;
  }

  if (diffDays === 1) return 'posted yesterday';
  if (diffDays < 7) return `posted ${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) {
    if (diffWeeks === 1) return 'posted a week ago';
    return `posted ${diffWeeks} weeks ago`;
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    if (diffMonths === 1) return 'posted a month ago';
    return `posted ${diffMonths} months ago`;
  }

  const diffYears = Math.floor(diffDays / 365);
  if (diffYears === 1) return 'posted a year ago';
  return `posted ${diffYears} years ago`;
};
