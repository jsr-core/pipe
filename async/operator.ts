/**
 * AsyncOperator function that takes a value and returns a new value.
 */
export type AsyncOperator<A, B> = (v: A) => B | Promise<B>;
