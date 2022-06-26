export type Constructor<T = any> = {
	new (...args: never[]): T;
	readonly prototype: T;
};
