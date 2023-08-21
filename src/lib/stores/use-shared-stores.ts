// @ts-nocheck
import { getContext, hasContext, setContext } from 'svelte';
import { readable, writable } from 'svelte/store';

// context for any type of store
export const useSharedStore = (name: string, fn, defaultValue: any): any => {
	if (hasContext(name)) {
		return getContext(name);
	}
	const _value: any = fn(defaultValue);
	setContext(name, _value);
	return _value;
};

// writable store context
export const useWritable = (name: string, value) => useSharedStore(name, writable, value);

// readable store context
export const useReadable = (name: string, value) => useSharedStore(name, readable, value);
