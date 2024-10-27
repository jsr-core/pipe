import type { Operator } from "./operator.ts";
import type { LastOperatorReturn } from "./_common.ts";

/**
 * Composes a sequence of operators to create a new function.
 * Supports type inference for operators and the return type of the final operator.
 *
 * > [!NOTE]
 * >
 * > If more than 20 operators are used, their types default to `Operator<unknown, unknown>`,
 * > requiring explicit type annotations.
 *
 * @param operators - A sequence of operators to apply to the value.
 * @returns A function that processes the value through all operators and returns the final result.
 *
 * @example
 * ```ts
 * import { compose } from "@core/pipe";
 *
 * const result = compose(
 *   (v: number) => v + 1,  // The first operator requires an explicit type
 *   (v) => v * 2,          // inferred as (v: number) => number
 *   (v) => v.toString(),   // inferred as (v: number) => string
 * )(1);
 * console.log(result); // "4"
 * ```
 */
export function compose<V, T01>(
  o01: Operator<V, T01>,
): Operator<V, T01>;
export function compose<V, T01, T02>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
): Operator<V, T02>;
export function compose<V, T01, T02, T03>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
): Operator<V, T03>;
export function compose<V, T01, T02, T03, T04>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
): Operator<V, T04>;
export function compose<V, T01, T02, T03, T04, T05>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
): Operator<V, T05>;
export function compose<V, T01, T02, T03, T04, T05, T06>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
): Operator<V, T06>;
export function compose<V, T01, T02, T03, T04, T05, T06, T07>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
): Operator<V, T07>;
export function compose<V, T01, T02, T03, T04, T05, T06, T07, T08>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
): Operator<V, T08>;
export function compose<V, T01, T02, T03, T04, T05, T06, T07, T08, T09>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
): Operator<V, T09>;
export function compose<V, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
): Operator<V, T10>;
export function compose<
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
>(
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
): Operator<V, T11>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
): Operator<V, T12>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
): Operator<V, T13>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
): Operator<V, T14>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
): Operator<V, T15>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
): Operator<V, T16>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
): Operator<V, T17>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
): Operator<V, T18>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
  o19: Operator<T18, T19>,
): Operator<V, T19>;
export function compose<
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
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
  o19: Operator<T18, T19>,
  o20: Operator<T19, T20>,
): Operator<V, T20>;

// deno-lint-ignore no-explicit-any
export function compose<V, Operators extends Operator<any, unknown>[]>(
  ...operators: Operators
): Operator<V, LastOperatorReturn<Operators>>;

// deno-lint-ignore no-explicit-any
export function compose<V>(...operators: Operator<unknown, any>[]) {
  return (value: V) => {
    return operators.reduce(
      (result, next) => next(result),
      value,
    );
  };
}