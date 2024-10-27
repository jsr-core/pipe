import type { Operator } from "./operator.ts";

/**
 * @internal
 */
export type LastOperatorReturn<T extends Operator<unknown, unknown>[]> =
  T extends [...Operator<unknown, unknown>[], Operator<unknown, infer R>] ? R
    : never;
