import type { AsyncOperator } from "./operator.ts";

/**
 * @internal
 */
export type LastAsyncOperatorReturn<
  T extends AsyncOperator<unknown, unknown>[],
> = T extends
  [...AsyncOperator<unknown, unknown>[], AsyncOperator<unknown, infer R>] ? R
  : never;
