/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * orval-repro
 */
export type Test200TopEnum =
  (typeof Test200TopEnum)[keyof typeof Test200TopEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Test200TopEnum = {
  AAA: "AAA",
  BBB: "BBB",
  CCC: "CCC",
} as const;

export type Test200 = {
  data: Test200DataItem[];
  topEnum: Test200TopEnum;
};

export type Test200DataItemDeepEnum =
  (typeof Test200DataItemDeepEnum)[keyof typeof Test200DataItemDeepEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Test200DataItemDeepEnum = {
  XXX: "XXX",
  YYY: "YYY",
  ZZZ: "ZZZ",
} as const;

export type Test200DataItem = {
  deepEnum?: Test200DataItemDeepEnum;
};