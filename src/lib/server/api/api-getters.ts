// functions to get data from waifu.im

import { handleError } from '$lib/scripts/helper/errorHandler';

async function getImages(many: boolean = true, height: number = 2000): Promise<any> {
	try {
		const apiUrl = 'https://api.waifu.im/search';
		const params = {
			many,
			// included_tags: 'maid',
			height: `>=${height}`
		};

		// ts-ignore is needed so typescript ignores type checking for `many` which is a boolean

		//@ts-ignore
		const queryParams = new URLSearchParams(params);
		const requestUrl = `${apiUrl}?${queryParams}`;
		let response;
		response = await fetch(requestUrl);
		if (response.ok) {
			const data: object[] = await response.json();
			return data;
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
			const data: object = await response.json();

			return data;
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
