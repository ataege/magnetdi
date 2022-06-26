import { container } from '..';

/**
 * @description Parameter decorator factory that allows for interface information to be stored in the constructor's metadata
 * 
 * @example
 * ```typescript
 * import { Inject, Injectable } from 'magnetdi';
 * *@Injectable('foo')
 * class Foo {
 * 	constructor(@Inject('bar') public bar: Bar) {}
 * }
 * ```
 */
export function Inject(token: string) {
	return function (target: any, key: string) {
		Object.defineProperty(target, key, {
			get: () => container.resolve(token),
			enumerable: true,
			configurable: true,
		});
	};
}
