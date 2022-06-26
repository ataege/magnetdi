import { find } from 'lodash';
import { UnknownProviderError } from '../errors';

export interface ContainerProvider {
	useValue: any;
	token: string;
}

export class Container {
	public providers: { [key: string]: any } = {};

	public resolve(token: string) {
		const match = find(this.providers, (_provider, key) => key === token);

		if (match) return match;

		throw new UnknownProviderError(token);
	}
	public provide(provider: ContainerProvider): void {
		this.providers[provider.token] = provider.useValue;
	}
}

export const container = new Container();
