import { mocha } from 'mocha';
import Runner from 'mocha/lib/runner';
import * as expect from 'expect';

const CONSTANTS = Runner.constants;

const requires = {
  expect: expect
};

export const testRunner = source => {
  return new Promise(resolve => {
    class Reporter {
      constructor(runner) {
        const results = [];
        runner.on(CONSTANTS.EVENT_TEST_PASS, test => {
          results.push(test);
        });
        runner.on(CONSTANTS.EVENT_TEST_FAIL, test => {
          results.push(test);
        });
        runner.on(CONSTANTS.EVENT_RUN_END, () => {
          resolve(results);
        });
      }
    }
    mocha.suite.suites = [];
    mocha.setup({ ui: 'bdd', reporter: Reporter });
    const requireKeys = Object.keys(requires);
    const requireValues = requireKeys.map(key => requires[key]);
    const fn = Function(...requireKeys, source);
    fn(...requireValues);
    mocha.run();
  });
};
