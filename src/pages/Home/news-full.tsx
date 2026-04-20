import { useState, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SEO from "../../components/SEO";
import { usePublishedArticles, useInvalidateArticles } from "../../hooks/useArticles";
import type { ArticleResponse } from "../../types/api-responses";
import { NewsGridSkeleton } from "../../components/Skeletons/NewsCardSkeleton";
import NotFound from "../../components/NotFound";

// Transform API articles to displayable format
const transformArticle = (article: ArticleResponse) => {
	const heroImage = article.snippet?.cover_image_url || 'https://via.placeholder.com/1200x600';
	const dateTime = article.createdAt || (article as any).created_at;

	// Handle content - it can be an object with HTML strings or a single HTML string
	let contentDisplay: any = {};
	if (article.page?.content) {
		if (typeof article.page.content === 'string') {
			contentDisplay = { content_html: article.page.content };
		} else if (typeof article.page.content === 'object' && Object.keys(article.page.content).length > 0) {
			contentDisplay = article.page.content;
		}
	}

	return {
		id: article.id,
		title: article.snippet?.title || "Untitled Article",
		heroImage,
		content: contentDisplay,
		category: article.page?.category || "News",
		createdAt: dateTime,
	};
};

export default function NewsFullPage() {
	// Use TanStack Query hook for caching
	const { data: articlesData = [], isLoading: loading, error: queryError } = usePublishedArticles();
	const { invalidatePublished } = useInvalidateArticles();
	
	const error = queryError ? (queryError instanceof Error ? queryError.message : 'Failed to load articles') : null;
	const transformedArticles = articlesData.map(transformArticle);

	const [currentHash, setCurrentHash] = useState(() => window.location.hash.replace("#", ""));

	// Listen for hash changes
	useEffect(() => {
		const onHashChange = () => {
			const hash = window.location.hash.replace("#", "");
			setCurrentHash(hash);
		};
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, []);

	// Scroll to top when currentHash changes
	useEffect(() => {
		if (typeof window !== "undefined" && currentHash) {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	}, [currentHash]);

	const selectedArticle = transformedArticles.find((a) => a.id === currentHash) || transformedArticles[0];
	const filteredArticles = transformedArticles.filter((card) => card.id !== selectedArticle.id);

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
					<NotFound
						title="No Articles Available...Yet"
						description="We're currently preparing our latest health insights and medical updates. Check back soon for expert articles from our healthcare professionals."
						imageSrc="/not-found.png"
						ctaText="Refresh"
						onCta={() => invalidatePublished()}
					/>
				</div>
			)}

			{/* Content State */}
			{!loading && !error && transformedArticles.length > 0 && (
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
										<div className="space-y-[16px] text-[15px] lg:text-[18px] text-[#1F2A44] leading-[1.8]">
											{/* Render HTML content from API */}
											{typeof selectedArticle.content === 'object' && Object.keys(selectedArticle.content).length > 0 ? (
												Object.entries(selectedArticle.content).map(([key, htmlContent], index) => (
													<div
														key={`${selectedArticle.id}-${key}-${index}`}
														dangerouslySetInnerHTML={{ __html: htmlContent as string }}
														className="[&_br]:block [&_p]:mb-4 [&_h3]:font-semibold [&_h3]:text-[20px] [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
													/>
												))
											) : (
												<div className="p-4 bg-blue-50 border border-blue-200 rounded">
													<p className="text-blue-800">Content is loading or not available for this article. Please try refreshing the page.</p>
												</div>
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
													const newHash = article.id;
													setCurrentHash(newHash);
													window.location.hash = `#${newHash}`;
												}}
												className={`w-full text-left bg-white rounded-[12px] p-[20px] lg:p-[25px] transition-all duration-200 cursor-pointer group flex flex-col justify-between border border-[#0C21411A] ${currentHash === article.id
													? "ring-1 ring-[#0C2141]"
													: ""
													}`}
												aria-current={currentHash === article.id ? "true" : undefined}
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
