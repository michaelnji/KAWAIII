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

export { propsToArray, search };
