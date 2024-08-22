# pipe

[![jsr](https://jsr.io/badges/@core/pipe)](https://jsr.io/@core/pipe)
[![test](https://github.com/jsr-core/pipe/workflows/Test/badge.svg)](https://github.com/jsr-core/pipe/actions?query=workflow%3ATest)
[![codecov](https://codecov.io/github/jsr-core/pipe/graph/badge.svg?token=pfbLRGU5AM)](https://codecov.io/github/jsr-core/pipe)

Performs consecutive operations on a value in TypeScript. An alternative library
of the proposal of [Pipe Operator (`|>`) for JavaScript]. It supports type
inference and type checking of the operator functions.

> [!NOTE]
>
> When the number of operator functions applied to `pipe` get more than twenty,
> the result of type inference of each operator function become `unknown` and
> users need to annotate the type explicitly.

[Pipe Operator (`|>`) for JavaScript]: https://github.com/tc39/proposal-pipeline-operator

## Usage

Pipe a value through a series of operator functions.

```ts
import { pipe } from "@core/pipe";

const result = pipe(
  1,
  (v) => v + 1, // inferred as (v: number) => number
  (v) => v * 2, // inferred as (v: number) => number
  (v) => v.toString(), // inferred as (v: number) => string
);
console.log(result); // "4"
```

Or use `async` module to pipe a value through a series of asynchronous operator
functions.

```ts
import { pipe } from "@core/pipe/async";

const result = pipe(
  1,
  (v) => Promise.resolve(v + 1), // inferred as (v: number) => number
  (v) => Promise.resolve(v * 2), // inferred as (v: number) => number
  (v) => Promise.resolve(v.toString()), // inferred as (v: number) => string
);
console.log(result); // "4"
```

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
