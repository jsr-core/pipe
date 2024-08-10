import { assertEquals } from "@std/assert";
import { assertType, type IsExact } from "@std/testing/types";
import { pipe } from "./pipe.ts";

Deno.test("pipe", async (t) => {
  await t.step("with no operators", async (t) => {
    await t.step("should return the input", () => {
      assertEquals(pipe(1), 1);
    });
  });

  await t.step("with one operator", async (t) => {
    await t.step("should return operator applied value", () => {
      assertEquals(pipe(1, (v) => v * 2), 2);
    });

    await t.step("should resolve the type properly", () => {
      pipe(1, (v) => {
        assertType<IsExact<typeof v, number>>(true);
        return v.toString();
      });
    });
  });

  await t.step("with two operators", async (t) => {
    await t.step("should return operator applied value", () => {
      assertEquals(pipe(1, (v) => v * 2, (v) => v * 2), 4);
    });

    await t.step("should resolve the type properly", () => {
      pipe(1, (v) => {
        assertType<IsExact<typeof v, number>>(true);
        return v.toString();
      }, (v) => {
        assertType<IsExact<typeof v, string>>(true);
        return v.length;
      });
    });
  });

  await t.step("with three operators", async (t) => {
    await t.step("should return operator applied value", () => {
      assertEquals(pipe(1, (v) => v * 2, (v) => v * 2, (v) => v * 2), 8);
    });

    await t.step("should resolve the type properly", () => {
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
  });

  await t.step(`with twenty operators`, async (t) => {
    await t.step("should return operator applied value", () => {
      assertEquals(pipe(1, ...Array(20).fill((v: number) => v * 2)), 2 ** 20);
    });

    await t.step("should resolve the type properly", () => {
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
  });
});
