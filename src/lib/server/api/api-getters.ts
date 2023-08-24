// functions to get data from waifu.im

import { handleError } from '$lib/scripts/helper/errorHandler';
import { propsToArray, search } from '$lib/scripts/helper/utils';

async function getImages(
	many: boolean = true,
	height: number = 4000,
	tag?: string | null
): Promise<any> {
	if (tag) {
		try {
			const tags = await getTags();
			if (tags) {
				let included_tags: string[] = [];
				let excluded_tags: string[] = [];
				const versatileTags = tags;
				included_tags = versatileTags.filter((e: string) => e === tag);

				const apiUrl = 'https://api.waifu.im/search';
				const params = {
					many,
					height: `<${height}`,
					width: '<=1600',

					included_tags
				};

				// ts-ignore is needed so typescript ignores type checking for `many` which is a boolean

				//@ts-ignore
				const queryParams = new URLSearchParams(params);
				const requestUrl = `${apiUrl}?${queryParams}`;
				let response;
				response = await fetch(requestUrl);

				if (response.ok) {
					let finalImages: any[] = [];
					const data = await response.json();
					console.log(data.images);
					const { images } = data;
					images.forEach((image: any) => {
						let tags = propsToArray('name', image.tags);
						if (search(tag, tags)) finalImages = [...finalImages, image];
					});

					return finalImages;
				}
				return undefined;
			}
		} catch (error: any) {
			console.log(error);
			// handle error due to internet connections
			const info = { ...error };
			if (error.message == 'fetch failed') {
				const {
					cause: { errno }
				} = info;
				return handleError(error.message, errno);
			}
		}
	}
	try {
		const apiUrl = 'https://api.waifu.im/search';
		const params = {
			many,
			height: `<${height}`,
			width: '<=1600'
		};

		// ts-ignore is needed so typescript ignores type checking for `many` which is a boolean

		//@ts-ignore
		const queryParams = new URLSearchParams(params);
		const requestUrl = `${apiUrl}?${queryParams}`;
		let response;
		response = await fetch(requestUrl);
		if (response.ok) {
			const data = await response.json();
			const { images } = data;
			return images;
		}
		return undefined;
	} catch (error: any) {
		// handle error due to internet connections
		const info = { ...error };
		if (error.message == 'fetch failed') {
			const {
				cause: { errno }
			} = info;
			return handleError(error.message, errno);
		}
	}
}
async function getTags(): Promise<any> {
	try {
		const apiUrl = 'https://api.waifu.im/tags';
		const response = await fetch(apiUrl);
		if (response.ok) {
			const data = await response.json();
			const { versatile } = data;
			return versatile;
		}

		return undefined;
	} catch (error: any) {
		// handle error due to internet connections
		const info = { ...error };
		if (error.message == 'fetch failed') {
			const {
				cause: { errno }
			} = info;
			return handleError(error.message, errno);
		}
	}
}

export { getImages, getTags };
