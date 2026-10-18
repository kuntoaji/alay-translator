import { test } from 'node:test';
import assert from 'node:assert/strict';
import { translate, NORMAL_TO_ALAY, ALAY_TO_NORMAL } from '../modules/translate.js';

test('translates normal text to alay', () => {
  assert.equal(translate('aku sayang kamu', NORMAL_TO_ALAY), '4|<!_! 54y4/\\/9 |<4111!_!');
});

test('ignores letter case when translating to alay', () => {
  assert.equal(translate('HALO', NORMAL_TO_ALAY), '1-14|0');
});

test('translates alay text to normal', () => {
  assert.equal(translate('4|<!_! 54y4/\\/9 |<4111!_!', ALAY_TO_NORMAL), 'aku sayang kamu');
});

test('keeps characters that have no rule', () => {
  assert.equal(translate('xyz 2!', NORMAL_TO_ALAY), 'xyz 2!');
});

test('returns an empty string for empty input', () => {
  assert.equal(translate('', NORMAL_TO_ALAY), '');
  assert.equal(translate('', ALAY_TO_NORMAL), '');
});
