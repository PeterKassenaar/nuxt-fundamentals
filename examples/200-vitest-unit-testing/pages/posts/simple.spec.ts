import {afterEach, beforeEach, describe, expect, it} from 'vitest';

describe('Component to test', () => {
  beforeEach(() => {
    // Setup...
  });

  afterEach(() => {
    // Teardown...
  });

  it('Should render true', () => {
    expect(true).toBeTruthy();
  });

  it('Should show every it-block',  () => {

  });

  it.skip('Should skip this test in a run', () => {
    // expect() should be skipped
  });

  it.only('Should only run this test',  () => {
    // only this expect() should run
  });
});
