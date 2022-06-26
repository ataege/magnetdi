import { Constructor } from '..';
import { container } from '../instances';

export function Injectable(token: string): Function {
	return function (target: Constructor): void {
		container.providers[token] = new target();
	};
}
