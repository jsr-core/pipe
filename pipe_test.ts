import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { assertType, type IsExact } from "@std/testing/types";
import { pipe } from "./pipe.ts";

await test("pipe with no operators should return the input", () => {
  assertEquals(pipe(1), 1);
});

await test("pipe with one operator should return operator applied value", () => {
  assertEquals(pipe(1, (v) => v * 2), 2);
});

await test("pipe with one operator should resolve the type properly", () => {
  pipe(1, (v) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  });
});

await test("pipe with two operators should return operator applied value", () => {
  assertEquals(pipe(1, (v) => v * 2, (v) => v * 2), 4);
});

await test("pipe with two operators should resolve the type properly", () => {
  pipe(1, (v) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  }, (v) => {
    assertType<IsExact<typeof v, string>>(true);
    return v.length;
  });
});

await test("pipe with three operators should return operator applied value", () => {
  assertEquals(pipe(1, (v) => v * 2, (v) => v * 2, (v) => v * 2), 8);
});

await test("pipe with three operators should resolve the type properly", () => {
  pipe(1, (v) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  }, (v) => {
    assertType<IsExact<typeof v, string>>(true);
    return v.length;
  }, (v) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  });
});

await test("pipe with twenty operators should return operator applied value", () => {
  assertEquals(pipe(1, ...Array(20).fill((v: number) => v * 2)), 2 ** 20);
});

await test("pipe with twenty operators should resolve the type properly", () => {
  pipe(
    1,
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
    (v) => {
      assertType<IsExact<typeof v, number>>(true);
      return v;
    },
  );
});
