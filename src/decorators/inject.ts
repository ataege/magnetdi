import { container } from '..';

export function Inject(token: string) {
	return function (target: any, key: string) {
		Object.defineProperty(target, key, {
			get: () => container.resolve(token),
			enumerable: true,
			configurable: true,
		});
	};
}
