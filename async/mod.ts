/**
 * AsyncOperator function that takes a value and returns a new value.
 */
export type AsyncOperator<A, B> = (v: A) => B | Promise<B>;

/**
 * @internal
 */
type LastAsyncOperatorReturn<
  T extends AsyncOperator<unknown, unknown>[],
> = T extends
  [...AsyncOperator<unknown, unknown>[], AsyncOperator<unknown, infer R>] ? R
  : never;

/**
 * Pipes a value through a series of asynchronous operator functions.
 * Supports type inference for both the operator functions and the return value of the final operator.
 *
 * > [!NOTE]
 * >
 * > If the number of operators exceeds 20, the operator functions' types will default to
 * > `AsyncOperator<unknown, unknown>`, requiring explicit type annotations.
 *
 * @param value - The initial value to be processed through the operators.
 * @param operators - A sequence of functions to apply to the value.
 * @returns The final value after being processed through all the operators.
 *
 * @example
 * ```ts
 * import { pipe } from "@core/pipe/async";
 *
 * const result = await pipe(
 *   1,
 *   (v) => Promise.resolve(v + 1),  // inferred as (v: number) => number | Promise<number>
 *   (v) => Promise.resolve(v * 2),  // inferred as (v: number) => number | Promise<number>
 *   (v) => Promise.resolve(v.toString()), // inferred as (v: number) => string | Promise<string>
 * );
 * console.log(result); // "4"
 * ```
 */
export function pipe<V>(value: V): Promise<V>;
export function pipe<V, T01>(
  value: V,
  o01: AsyncOperator<V, T01>,
): Promise<T01>;
export function pipe<V, T01, T02>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
): Promise<T02>;
export function pipe<V, T01, T02, T03>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
): Promise<T03>;
export function pipe<V, T01, T02, T03, T04>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
): Promise<T04>;
export function pipe<V, T01, T02, T03, T04, T05>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
): Promise<T05>;
export function pipe<V, T01, T02, T03, T04, T05, T06>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
): Promise<T06>;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
): Promise<T07>;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
): Promise<T08>;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
): Promise<T09>;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
): Promise<T10>;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
): Promise<T11>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
): Promise<T12>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
): Promise<T13>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
): Promise<T14>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
): Promise<T15>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
  o16: AsyncOperator<T15, T16>,
): Promise<T16>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
  o16: AsyncOperator<T15, T16>,
  o17: AsyncOperator<T16, T17>,
): Promise<T17>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
  o16: AsyncOperator<T15, T16>,
  o17: AsyncOperator<T16, T17>,
  o18: AsyncOperator<T17, T18>,
): Promise<T18>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
  o16: AsyncOperator<T15, T16>,
  o17: AsyncOperator<T16, T17>,
  o18: AsyncOperator<T17, T18>,
  o19: AsyncOperator<T18, T19>,
): Promise<T19>;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
>(
  value: V,
  o01: AsyncOperator<V, T01>,
  o02: AsyncOperator<T01, T02>,
  o03: AsyncOperator<T02, T03>,
  o04: AsyncOperator<T03, T04>,
  o05: AsyncOperator<T04, T05>,
  o06: AsyncOperator<T05, T06>,
  o07: AsyncOperator<T06, T07>,
  o08: AsyncOperator<T07, T08>,
  o09: AsyncOperator<T08, T09>,
  o10: AsyncOperator<T09, T10>,
  o11: AsyncOperator<T10, T11>,
  o12: AsyncOperator<T11, T12>,
  o13: AsyncOperator<T12, T13>,
  o14: AsyncOperator<T13, T14>,
  o15: AsyncOperator<T14, T15>,
  o16: AsyncOperator<T15, T16>,
  o17: AsyncOperator<T16, T17>,
  o18: AsyncOperator<T17, T18>,
  o19: AsyncOperator<T18, T19>,
  o20: AsyncOperator<T19, T20>,
): Promise<T20>;

// deno-lint-ignore no-explicit-any
export function pipe<V, AsyncOperators extends AsyncOperator<any, unknown>[]>(
  value: V,
  ...operators: AsyncOperators
): Promise<LastAsyncOperatorReturn<AsyncOperators>>;

export async function pipe<V>(
  value: V,
  // deno-lint-ignore no-explicit-any
  ...operators: AsyncOperator<unknown, any>[]
) {
  return await operators.reduce(
    async (result, next) => next(await result),
    Promise.resolve(value),
  );
}
