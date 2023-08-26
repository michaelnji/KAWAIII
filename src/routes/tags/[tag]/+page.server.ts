import { getImages } from '$lib/server/api/api-getters';
import type Load from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
	const tag = params.tag;
	const data = await getImages(true, 2000, tag);
	if (data !== undefined) return { info: data };
	return {};
};
