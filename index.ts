import {  getTestMock } from './generated/schema.msw';

const mock = getTestMock();

// Should be "AAA" | "BBB" | "CCC"
const topEnum = mock.topEnum;
//    ^? const topEnum = string;

// Should be "XXX" | "YYY" | "ZZZ" | undefined
const deepEnum = mock.data.at(0)?.deepEnum
//    ^? const deepEnum = string | undefined;
