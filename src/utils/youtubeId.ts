export const extractYoutubeId = (url: string): string => {
  if (!url || typeof url !== 'string') return '';

  // Trim whitespace
  url = url.trim();

  // If it's already just an ID (11-12 characters, alphanumeric with - and _)
  if (/^[a-zA-Z0-9_-]{11,12}$/.test(url)) {
    return url;
  }

  // Try to match standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.*&v=|youtube\.com\/watch\?.*v=)([a-zA-Z0-9_-]{11,})/);
  if (watchMatch?.[1]) {
    return watchMatch[1];
  }

  // Try to match shortened URL: https://youtu.be/VIDEO_ID
  const youtubeShortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11,})/);
  if (youtubeShortMatch?.[1]) {
    return youtubeShortMatch[1];
  }

  // Try to match with time parameter: https://youtu.be/VIDEO_ID?t=10s
  const youtubeShortWithParamMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11,})\?/);
  if (youtubeShortWithParamMatch?.[1]) {
    return youtubeShortWithParamMatch[1];
  }

  // If no match found, return empty string
  return '';
};

export const getYoutubeEmbedUrl = (url: string): string => {
  const videoId = extractYoutubeId(url);
  if (!videoId) return '';
  return `https://www.youtube.com/embed/${videoId}?si=Q6VFw_wxLDZvBzs2`;
};
