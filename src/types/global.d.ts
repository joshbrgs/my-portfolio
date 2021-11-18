interface Window {
	fbq: any;
	gtag: any;
}

interface GaEvent {
	action: string;
	category?: string;
	label?: string;
	value?: string;
}

type App = {
	Component: any;
	pageProps: any;
	router: any;
};

type MetaProps = {
	canonicalUrl?: string;
	siteDescription?: string;
	title?: string;
	keywords?: string;
	icon?: string;
	description?: string;
	ogTitle?: string;
	ogType?: string;
	ogLocale?: string;
	ogDescription?: string;
	ogUrl?: string;
	ogSiteName?: string;
	ogImage?: string;
};

// type Post = {
// 	title: string;
// 	html: string;
// 	slug: string;
// 	tags: any;
// 	reading_time: Float32Array;
// 	custom_excerpt: string;
// 	authors: any;
// 	created_at: Float32Array;
// 	id: string;
// 	dateFormatted: any;
// 	feature_image: any;
// };

type Post = {
	title: string;
	slug: string;
	reading_time: Float32Array;
	custom_excerpt: string;
	tags: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }[];
	authors: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; profile_image: any }[];
	created_at: Float32Array;
	id: string;
	dateFormatted: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
	feature_image: string | undefined;
	html: any;
};
