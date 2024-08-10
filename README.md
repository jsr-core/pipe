# pipeline

[![jsr](https://jsr.io/badges/@core/pipeline)](https://jsr.io/@core/pipeline)
[![test](https://github.com/jsr-core/pipeline/workflows/Test/badge.svg)](https://github.com/jsr-core/pipeline/actions?query=workflow%3ATest)
[![codecov](https://codecov.io/github/jsr-core/pipeline/graph/badge.svg?token=pfbLRGU5AM)](https://codecov.io/github/jsr-core/pipeline)

## Usage

### pipe

Pipe a value through a series of operatorfunctions.

```ts
import { pipe } from "@core/pipeline";

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
