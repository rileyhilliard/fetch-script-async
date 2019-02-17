/* eslint-disable */
/* global describe, it, before */
import { expect } from 'chai';
import fetchScript from '../lib/fetch-script-async';

/* LOCAL STORAGE */
describe('fetch-script-async should behave as expected', () => {
  it('should exist', () => {
    expect(fetchScript).to.exist;
  });
});
