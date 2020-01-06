import * as Examples from './Array';

describe('Array', () => {
  Object.values(Examples).map(example => {
    eval(example.source);
  });
});
