import { find } from 'lodash';
import { UnknownProviderError } from '../errors';

export interface ContainerProvider {
	useValue: any;
	token: string;
}

/**
 * Container class.
 * This class is used to store and resolve dependencies.
 * It is a singleton class.
 * @class Container
 */
export class Container {
	public providers: { [key: string]: any } = {};

	/**
	 * @description Resolve a token from the container.
	 * @param {string} token The token to resolve.
	 * @example container.resolve('foo');
	 */
	public resolve(token: string) {
		const match = find(this.providers, (_provider, key) => key === token);

		if (match) return match;

		throw new UnknownProviderError(token);
	}

	/**
	 * @description Manually register a provider to the container.
	 * @param {ContainerProvider} provider The provider to register.
	 * @example container.register({ token: 'foo', useValue: 'bar' });
	 */
	public provide(provider: ContainerProvider): void {
		this.providers[provider.token] = provider.useValue;
	}
}

export const container = new Container();
