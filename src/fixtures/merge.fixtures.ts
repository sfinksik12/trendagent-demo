import { test as baseTest, mergeTests, mergeExpects } from '@playwright/test';
import type { Expect } from '@playwright/test';
import { expectExtensions } from '../expects';
import { pomTest } from './pom.fixtures';

type ExtractMatchers<T> = T extends Expect<infer Matchers> ? Matchers : never;
type MergeMatchers<T extends readonly unknown[]> = T extends readonly [infer First, ...infer Rest]
  ? ExtractMatchers<First> & MergeMatchers<Rest>
  : {};

export const test = mergeTests(baseTest, pomTest);
export const expect: Expect<MergeMatchers<typeof expectExtensions>> = mergeExpects(...expectExtensions);
