import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getImages } from '$lib/server/api/api-getters';

export const GET: RequestHandler = async ({ params }) => {
	const tag = params.tag;
	console.log(tag);
	const data = await getImages(true, 2000, tag);
	if (data !== undefined) return json(data);
	return json(null);
};
