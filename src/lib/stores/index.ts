import { useWritable } from './use-shared-stores';

export const useTransactions = () => useWritable('transactions', []);
export const useProfile = () => useWritable('profile', {});
export const useCards = () => useWritable('cards', []);
export const useIsOffline = () => useWritable('isOffline', true);
export const useStatus = () => useWritable('status', 0);
