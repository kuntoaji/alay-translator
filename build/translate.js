'use strict';

export const NORMAL_TO_ALAY = '0';
export const ALAY_TO_NORMAL = '1';

// Rules run in order, so a later rule sees the output of an earlier one.
const NORMAL_TO_ALAY_RULES = [[/a/gi, '4'], [/b/gi, '13'], [/d/gi, '@|'], [/e/gi, '3'], [/g/gi, '9'], [/h/gi, '1-1'], [/m/gi, '111'], [/r/gi, '12'], [/i/gi, '1'], [/j/gi, ')'], [/k/gi, '|<'], [/l/gi, '|'], [/n/gi, '/\\/'], [/o/gi, '0'], [/s/gi, '5'], [/t/gi, '7'], [/u/gi, '!_!']];
const ALAY_TO_NORMAL_RULES = [[/4/gi, 'a'], [/13/gi, 'b'], [/@\|/gi, 'd'], [/3/gi, 'e'], [/9/gi, 'g'], [/1-1/gi, 'h'], [/111/gi, 'm'], [/12/gi, 'r'], [/1/gi, 'i'], [/\)/gi, 'j'], [/\|</gi, 'k'], [/\|/gi, 'l'], [/\/\\\//gi, 'n'], [/0/gi, 'o'], [/5/gi, 's'], [/7/gi, 't'], [/!_!/gi, 'u']];
export function translate(text, direction) {
  const rules = direction === NORMAL_TO_ALAY ? NORMAL_TO_ALAY_RULES : ALAY_TO_NORMAL_RULES;
  return rules.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), text);
}