import { useWritable } from './use-shared-stores';

export const useTags = () => useWritable('tags', []);
