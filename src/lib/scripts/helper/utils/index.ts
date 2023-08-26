// const waifuPicsTags: string[] = [
// 	'neko',
// 	'shinobu',
// 	'megumin',
// 	'cuddle',
// 	'cry',
// 	'hug',
// 	'awoo',
// 	'bonk',
// 	'yeet',
// 	'blush',
// 	'wave',
// 	'nom',
// 	'bite',
// 	'glomp',
// 	'happy',
// 	'wink',
// 	'poke',
// 	'dance'
// ];

function search(item: any, table: any[]): boolean {
	let itemFound = false;
	table.forEach((currentItem) => {
		if (currentItem === item) {
			itemFound = true;
		}
	});

	return itemFound;
}

function propsToArray(propName: string, objects: any): any[] {
	let arr: any[] = [];
	objects.forEach((obj: any) => {
		arr = [...arr, obj[propName]];
	});

	return arr;
}

// function addWPToTags(tags: string[]): string[] {
// 	return [...tags, ...waifuPicsTags];
// }

export { propsToArray, search };
