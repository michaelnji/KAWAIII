function handleError(message: string, errno: number) {
	if (message == 'fetch failed' && errno == -3008) {
		return {
			error: 'connection problems, try again later',
			status: 500
		};
	}
}
export { handleError };
