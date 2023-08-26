import { getImagesByTagClient } from '$lib/scripts/api/data/images';
import { getImages } from '$lib/server/api/api-getters';
import type Load from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { isArray } from 'mathjs';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
	const waifu: any = await getImages(true, 2000, 'waifu');

	if (!isArray(waifu)) return !waifu ? { error: 'we seem to have encountered an error' } : waifu;

	const marin: any = await getImages(true, 2000, 'marin-kitagawa');

	if (!isArray(marin)) return !marin ? { error: 'we seem to have encountered an error' } : marin;

	const oppai: any = await getImages(true, 2000, 'oppai');

	if (!isArray(oppai)) return oppai ? oppai : { error: 'we seem to have encountered an error' };

	const maid: any = await getImages(true, 2000, 'maid');

	if (!isArray(maid)) return maid ? maid : { error: 'we seem to have encountered an error' };

	const uniform: any = await getImages(true, 2000, 'uniform');

	if (!isArray(uniform))
		return uniform ? uniform : { error: 'we seem to have encountered an error' };

	return {
		oppai,
		maid,
		marin,
		uniform,
		waifu
	};
};
