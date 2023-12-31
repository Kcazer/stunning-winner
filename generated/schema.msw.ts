/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * orval-repro
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";

export const getTestMock = () => ({
  data: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    deepEnum: faker.helpers.arrayElement([
      faker.helpers.arrayElement(["XXX", "YYY", "ZZZ"]),
      undefined,
    ]),
  })),
  topEnum: faker.helpers.arrayElement(["AAA", "BBB", "CCC"]),
});

export const getOrvalReproMSW = () => [
  http.get("*/test", async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getTestMock()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
