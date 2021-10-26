import GhostContentAPI from '@tryghost/content-api';

const { API_URL, CONTENT_API } = process.env;

export const GhostClient = new GhostContentAPI({
	url: API_URL,
	key: CONTENT_API,
	version: 'v3',
});
