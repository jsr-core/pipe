import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { assertType, type IsExact } from "@std/testing/types";
import { compose } from "./compose.ts";

await test("compose with no operators should return an identity function", async () => {
  assertEquals(await compose()(1), 1);
});

await test("compose with one operator should return the operator", async () => {
  assertEquals(await compose((v: number) => Promise.resolve(v * 2))(1), 2);
});

await test("compose with one operator requires explicity type annotation", () => {
  compose((v) => {
    assertType<IsExact<typeof v, unknown>>(true);
  });
  compose((v: number) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  });
});

await test("compose with two operators should return a composed operator", async () => {
  assertEquals(
    await compose(
      (v: number) => Promise.resolve(v * 2),
      (v) => Promise.resolve(v * 2),
    )(1),
    4,
  );
});

await test("compose with two operators should resolve the type properly", () => {
  compose((v: number) => {
    assertType<IsExact<typeof v, number>>(true);
    return v.toString();
  }, (v) => {
    assertType<IsExact<typeof v, string>>(true);
    return v.length;
  });
});

await test("compose with three operators should return a composed operator", async () => {
  assertEquals(
    await compose(
      (v: number) => Promise.resolve(v * 2),
      (v) => Promise.resolve(v * 2),
      (v) => Promise.resolve(v * 2),
    )(1),
    8,
  );
});

await test("compose with three operators should resolve the type properly", () => {
  compose((v: number) => {
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

await test("compose with twenty operators should return a composed operator", async () => {
  assertEquals(
    await compose(...Array(20).fill((v: number) => Promise.resolve(v * 2)))(1),
    2 ** 20,
  );
});

await test("compose with twenty operators should resolve the type properly", () => {
  compose(
    (v: number) => {
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
