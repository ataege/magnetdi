import { find } from 'lodash';
import { UnknownProviderError } from '../errors';

export class Container {
	public providers: { [key: string]: any } = {};

	public resolve(token: string) {
		const match = find(this.providers, (_provider, key) => key === token);

		if (match) return match;

		throw new UnknownProviderError(token);
	}
}

export const container = new Container();
