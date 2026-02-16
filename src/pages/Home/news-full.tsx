import { useState, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SEO from "../../components/SEO";
import { getPublishedArticles } from "../../services/articleService";
import type { ArticleResponse } from "../../types/api-responses";
import { NewsGridSkeleton } from "../../components/Skeletons/NewsCardSkeleton";

// Transform API articles to displayable format
const transformArticle = (article: ArticleResponse) => {
  const heroImage = article.snippet?.cover_image_url || 'https://via.placeholder.com/1200x600';
  const dateTime = article.createdAt || (article as any).created_at;
  console.log('Transform: heroImage =', heroImage, 'date =', dateTime);
  
  return {
    id: article.id,
    title: article.snippet?.title || "Untitled Article",
    heroImage,
    content: article.page?.content || {},
    category: article.page?.category || "News",
    createdAt: dateTime,
  };
};

export default function NewsFullPage() {
	const [transformedArticles, setTransformedArticles] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	// Fetch articles from API
	useEffect(() => {
		const fetchArticles = async () => {
			try {
				setLoading(true);
				setError(null);
				console.log('Fetching published articles...');
				const data = await getPublishedArticles();
				console.log('Raw API response:', data);
				console.log('Number of articles received:', data?.length || 0);
				
				const transformed = data.map(transformArticle);
				console.log('Transformed articles:', transformed);
				setTransformedArticles(transformed);
				
				// Get initial ID from hash or use first article
				const hashId = window.location.hash.replace("#", "");
				if (hashId && transformed.some((a) => a.id === hashId)) {
					setSelectedId(hashId);
				} else if (transformed.length > 0) {
					setSelectedId(transformed[0].id);
				}
				console.log('Selected ID:', hashId || transformed[0]?.id || 'none');
			} catch (err) {
				const errorMsg = err instanceof Error ? err.message : 'Failed to load articles';
				setError(errorMsg);
				console.error('Error fetching articles:', err);
				console.error('Error details:', { message: errorMsg, stack: err instanceof Error ? err.stack : 'N/A' });
			} finally {
				setLoading(false);
			}
		};

		fetchArticles();
	}, []);

	// Listen for hash changes
	useEffect(() => {
		const onHashChange = () => {
			const hash = window.location.hash.replace("#", "");
			if (hash && transformedArticles.some((a) => a.id === hash)) {
				setSelectedId(hash);
			}
		};
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, [transformedArticles]);

	// Scroll to top when selectedId changes
	useEffect(() => {
		if (typeof window !== "undefined" && selectedId) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	}, [selectedId]);

	const selectedArticle = transformedArticles.find((a) => a.id === selectedId) || transformedArticles[0];
	const filteredArticles = transformedArticles.filter((card) => card.id !== selectedId);

	return (
		<>
			<SEO
				title="Euracare News & Updates — Cardiology, Radiology, Surgery in Lagos"
				description="Latest updates from Euracare Hospital Lagos — interventional cardiology, interventional radiology, bariatric and orthopedic surgery updates, and advances in diagnostics (MRI, CT)."
				keywords={[
					"Euracare Hospital Lagos",
					"cardiology hospital Lagos",
					"interventional cardiology Lagos",
					"radiology hospital Lagos",
					"MRI scan Lagos",
					"CT scan Lagos",
					"Bariatric Surgery price Nigeria",
					"orthopedic surgery hospital Victoria Island",
				]}
			/>

			{/* Loading State */}
			{loading && <NewsGridSkeleton />}

			{/* Error State */}
			{error && !loading && (
				<div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
					<div className="p-4 bg-white border border-red-200 rounded-lg">
						<p className="text-red-600 text-sm">{error}</p>
					</div>
				</div>
			)}

			{/* Empty State */}
			{!loading && !error && transformedArticles.length === 0 && (
				<div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
					<p className="text-center text-gray-600 text-lg">No articles available.</p>
				</div>
			)}

			{/* Hero Section with Article Image */}
			{!loading && selectedArticle && (
				<>
					<section className="relative w-full h-[250px] lg:h-[500px] overflow-hidden">
						<img
							src={selectedArticle.heroImage}
							alt={selectedArticle.title}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
					</section>

					<div className="bg-[#EFF8F8] px-[16px] py-[60px] lg:py-[80px] lg:px-[80px]">
						<ScrollToTop />
						<div className="">
							<div className="lg:max-w-6xl lg:mx-auto">
								{/* Main Article */}
								<div className="lg:col-span-2">
									<section
										id={selectedArticle.id}
										className="mb-16 lg:mb-[120px]"
									>
										<h2 className="text-[22px] leading-[28px] lg:leading-none lg:text-[32px] font-medium text-[#02070D] mb-[20px] sm:mb-[30px]">
											{selectedArticle.title}
										</h2>
										<div className="space-y-[16px] text-[15px] lg:text-[18px] text-[#1F2A44]">
											{/* Render HTML content from API */}
											{typeof selectedArticle.content === 'object' && Object.keys(selectedArticle.content).length > 0 ? (
												Object.values(selectedArticle.content).map((htmlContent, index) => (
													<div
														key={index}
														dangerouslySetInnerHTML={{ __html: htmlContent as string }}
														className="prose prose-sm lg:prose-base"
													/>
												))
											) : (
												<p>No content available for this article.</p>
											)}
										</div>
									</section>
								</div>
							</div>
							{/* More News Cards */}
							{filteredArticles.length > 0 && (
								<div>
									<h3 className="text-[20px] lg:text-[32px] font-medium text-center text-[#0C2141] mb-6 lg:mb-[40px] lg:leading-[40px]">
										More News You Might Like
									</h3>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
										{filteredArticles.map((article) => (
											<button
												key={article.id}
												onClick={() => {
													setSelectedId(article.id);
													window.location.hash = `#${article.id}`;
												}}
												className={`w-full text-left bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between border border-[#0C21411A] ${selectedId === article.id
													? "ring-1 ring-[#0C2141]"
													: ""
													}`}
												aria-current={selectedId === article.id ? "true" : undefined}
											>
												<div>
													<p className="text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#626F82] mb-[10px] lg:mb-[20px] font-medium">
														{article.createdAt ? new Date(article.createdAt).toLocaleDateString('en-US', {
															year: 'numeric',
															month: 'short',
															day: 'numeric'
														}) : 'Recent'}
													</p>
													<h4 className="text-[16px] lg:text-[20px] font-medium text-[#02070D] leading-[26px] tracking-[-0.5px] lg:leading-[30px] lg:tracking-[-0.72px] leading-tight mb-[80px]">
														{article.title}
													</h4>
												</div>
												<div className="text-[14px] text-[#02070D] leading-[24px] font-normal mt-auto">
													{article.category}
												</div>
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}
