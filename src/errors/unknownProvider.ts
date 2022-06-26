/**
 * @description Error thrown when a provider is not found in the container.
 * @class UnknownProviderError
 * @extends {Error}
 * @example throw new UnknownProviderError('foo');
 */
export class UnknownProviderError extends Error {
	constructor(token: string) {
		super(`No provider found for ${token}`);
	}
}
