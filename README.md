# pipe

[![jsr](https://jsr.io/badges/@core/pipe)](https://jsr.io/@core/pipe)
[![test](https://github.com/jsr-core/pipe/workflows/Test/badge.svg)](https://github.com/jsr-core/pipe/actions?query=workflow%3ATest)
[![codecov](https://codecov.io/github/jsr-core/pipe/graph/badge.svg?token=pfbLRGU5AM)](https://codecov.io/github/jsr-core/pipe)

## Usage

### pipe

Pipe a value through a series of operatorfunctions.

```ts
import { pipe } from "@core/pipe";

const result = pipe(
  1,
  (v) => v + 1,
  (v) => v * 2,
  (v) => v.toString(),
);
console.log(result); // "4"
```

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
