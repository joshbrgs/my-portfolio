import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/GA';

const GoogleAnalyticsTag = ({ children }: any): JSX.Element => {
	const router = useRouter();

	// This pageview only trigger first time (it is important for Tag to have real information)
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return children;
};

export default GoogleAnalyticsTag;
