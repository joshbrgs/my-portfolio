export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING;

/**
 * Sends a page view event to Google analytics. Use this when you a page navigation happens.
 * More info: https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * @param url The URL of the visited page.
 */
export const pageview = (url: string): void => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

/**
 * Sends an event to Google analytics. Use this when you want to track a user event.
 * More info: https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * @param event - The event to be tracked.
 */
export const trackEvent = ({ action, category, label, value }: GaEvent): void => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};
