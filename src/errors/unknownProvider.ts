export class UnknownProviderError extends Error {
	constructor(token: string) {
		super(`No provider found for ${token}`);
	}
}
