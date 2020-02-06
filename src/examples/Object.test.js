import * as Examples from './Object';

describe('Object', () => {
  Object.values(Examples).map(example => {
    eval(example.source);
  });
});
