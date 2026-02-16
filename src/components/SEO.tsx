import { useEffect } from "react";

type SEOProps = {
	 title?: string;
	 description?: string;
	 keywords?: string[];
	 jsonLd?: Record<string, unknown> | null;
};

export default function SEO({ title, description, keywords = [], jsonLd = null }: SEOProps) {
	useEffect(() => {
		const prevTitle = document.title;
		if (title) document.title = title;

		const ensureMeta = (name: string) => {
			let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
			if (!el) {
				el = document.createElement("meta");
				el.name = name;
				document.head.appendChild(el);
			}
			return el;
		};

		let descMeta: HTMLMetaElement | null = null;
		let keywordsMeta: HTMLMetaElement | null = null;

		if (description) {
			descMeta = ensureMeta("description");
			descMeta.content = description;
		}
		if (keywords && keywords.length > 0) {
			keywordsMeta = ensureMeta("keywords");
			keywordsMeta.content = keywords.join(", ");
		}

		// JSON-LD injection (if provided)
		let jsonLdEl: HTMLScriptElement | null = null;
		if (jsonLd) {
			jsonLdEl = document.createElement("script");
			jsonLdEl.type = "application/ld+json";
			jsonLdEl.id = "seo-jsonld";
			jsonLdEl.text = JSON.stringify(jsonLd);
			document.head.appendChild(jsonLdEl);
		}

		return () => {
			// cleanup: restore title and remove injected JSON-LD if any (keep meta tags as they may be reused)
			document.title = prevTitle;
			if (jsonLdEl && jsonLdEl.parentNode) jsonLdEl.parentNode.removeChild(jsonLdEl);
			// Note: We intentionally do not remove description/keywords meta tags to avoid flicker on SPA navigation.
		};
	}, [title, description, keywords, jsonLd]);

	return null;
}

// SEO({ title, description, keywords, jsonLd }) sets:
// document.title, meta[name="description"].content, meta[name="keywords"].content
// and injects <script type="application/ld+json"> when jsonLd supplied.
