import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getImages } from '$lib/server/api/api-getters';

export const GET: RequestHandler = async () => {
	const data = await getImages();
	if (data !== undefined) return json(data);
	return json(null);
};
