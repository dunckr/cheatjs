import { mocha } from 'mocha';
import * as expect from 'expect';

import { Reporter } from './reporter';

// mocha.setup({ ui: 'bdd' });
mocha.setup({ ui: 'bdd', reporter: Reporter });

describe('test suite', function() {
  it('should work', function() {
    expect(1).toEqual(2);
  });
});

mocha.checkLeaks();
mocha.run();
