import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPublishedArticles } from "../../services/articleService";
import type { ArticleResponse } from "../../types/api-responses";
import { NewsGridSkeleton } from "../../components/Skeletons/NewsCardSkeleton";

const EuracareNews = () => {
  const [articles, setArticles] = useState<ArticleResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch published articles from API
  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPublishedArticles();
      // Normalize the data to ensure createdAt field exists
      const normalized = data.map(article => ({
        ...article,
        createdAt: article.createdAt || (article as any).created_at
      }));
      setArticles(normalized);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load articles';
      setError(errorMsg);
      // console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Format date from timestamp
  const formatDate = (dateString?: string): string => {
    if (!dateString) return 'Recent';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  // Generate slug from title for linking
  const getSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const additionalArticles = articles.length > 1 ? articles.slice(1, 5) : [];
  const remainingArticles = articles.length > 5 ? articles.slice(5) : [];

  return (
    <div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
      <div className="">
        <h1 className="text-[24px] leading-[30px] tracking-[-0.5px] lg:text-[40px] lg:leading-[40px] font-medium lg:tracking-[-0.8px] text-[#02070D]">
          Latest Updates from Euracare
        </h1>

        <p className="mt-[10px] max-w-[900px] text-[14px] lg:text-[16px] lg:leading-[24px] mb-6 lg:mb-[60px]">
          Stay informed with the latest from Euracare—from expert health tips and breakthrough procedures to events, medical milestones, and stories that shape the future of healthcare in Nigeria.
        </p>

        {/* Error State */}
        {error && (
          <div className="mb-4 p-4 bg-white border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={fetchArticles}
              className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <NewsGridSkeleton />
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles available.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[16px]">
              {/* Featured Article - Takes up 2 columns on desktop */}
              {featuredArticle && (
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-[8px] lg:rounded-[12px] overflow-hidden shadow-sm h-full">
                    {/* Featured Image */}
                    <div className="relative h-[200px] lg:h-[300px]">
                      <img
                        src={featuredArticle.snippet?.cover_image_url || 'https://via.placeholder.com/800x400'}
                        alt={featuredArticle.snippet?.title || 'Featured article'}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Featured Content with Dark Overlay */}
                    <Link to={`/home/news#${getSlug(featuredArticle.snippet?.title || '')}`}>
                      <div className="bg-[#0C2141] text-white p-[20px] lg:p-[30px] cursor-pointer hover:bg-[#142e4d] transition">
                        <p className="text-[12px] lg:text-[16px] text-white leading-[24px] tracking-[-0.48px] mb-[20px] lg:mb-[20px]">
                          {formatDate(featuredArticle.createdAt)}
                        </p>
                        <h2 className="text-[20px] leading-[28px] tracking-[-1px] lg:text-[45px] lg:tracking-[1.35px] lg:leading-[58.5px] font-medium leading-tight mb-[40px] lg:mb-[135px]">
                          {featuredArticle.snippet?.title || 'Untitled Article'}
                        </h2>
                        <div className="text-xs lg:text-[16px] lg:leading-[24px] text-white">
                          {featuredArticle.page?.category || 'News'}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* News Grid - Takes up 2 columns on desktop */}
              {additionalArticles.length > 0 && (
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-[16px] h-full">
                    {additionalArticles.map((article) => (
                      <Link key={article.id} to={`/home/news#${getSlug(article.snippet?.title || '')}`}>
                        <div
                          className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between h-full"
                          style={{ minHeight: 0, height: "100%" }}
                        >
                          <div>
                            <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                              {formatDate(article.createdAt)}
                            </p>
                            <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] sm:mb-[104px]">
                              {article.snippet?.title || 'Untitled'}
                            </h3>
                          </div>
                          <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                            {article.page?.category || 'News'}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Articles Grid */}
            {remainingArticles.length > 0 && (
              <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[16px]">
                {remainingArticles.map((article) => (
                  <Link key={article.id} to={`/home/news#${getSlug(article.snippet?.title || '')}`}>
                    <div
                      className="bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group justify-between flex flex-col h-full"
                      style={{ minHeight: 0, height: "100%" }}
                    >
                      <div>
                        <p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
                          {formatDate(article.createdAt)}
                        </p>
                        <h3 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[40px] lg:mb-[104px]">
                          {article.snippet?.title || 'Untitled'}
                        </h3>
                      </div>
                      <div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
                        {article.page?.category || 'News'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div>
              <Link to="/home/news">
                <button className="mt-[40px] rounded-[48px] lg:tracking-[-0.54px] lg:text-[18px] lg:leading-[27px] w-full lg:w-auto bg-[#0C2141] hover:bg-[#0B1F37] transition text-white py-[14px] px-[70px]">
                  Read More News
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EuracareNews;