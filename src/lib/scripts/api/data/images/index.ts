async function getImagesClient(): Promise<any[] | undefined> {
	const url = '/api/get-images/';
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();
		return data;
	}
	return undefined;
}
async function getImagesByTagClient(tag: string): Promise<any[] | undefined> {
	const url = `/api/get-tag/${tag}`;
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();
		return data;
	}
	return undefined;
}
async function getTagsClient(): Promise<any> {
	const url = '/api/tags/';
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();
		return data;
	}
	return undefined;
}

export { getImagesClient, getTagsClient, getImagesByTagClient };
