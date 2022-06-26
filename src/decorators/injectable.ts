import { Constructor } from '..';
import { container } from '../instances';

/**
 * @description Class decorator factory that allows the class' dependencies to be injected at runtime.
 *
 * @example
 * ```typescript
 *import { container, Injectable } from 'magnetdi';
 * @Injectable('foo')
 * class Foo {}
 * container.resolve('foo'); // Foo
 * ```
 */
export function Injectable(token: string): Function {
	return function (target: Constructor): void {
		container.providers[token] = new target();
	};
}
