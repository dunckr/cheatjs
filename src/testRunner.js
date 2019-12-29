import { mocha } from 'mocha';
import Runner from 'mocha/lib/runner';
import * as expect from 'expect';
import PQueue from 'p-queue';

const CONSTANTS = Runner.constants;

const REQUIRES = {
  expect: expect
};

const queue = new PQueue({ concurrency: 1 });

const testRunner = source => {
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
    mocha.setup({
      ui: 'bdd',
      reporter: Reporter,
      ignoreLeaks: false,
      bail: false
    });
    const requireKeys = Object.keys(REQUIRES);
    const requireValues = requireKeys.map(key => REQUIRES[key]);
    const fn = Function(...requireKeys, source);
    fn(...requireValues);
    mocha.run();
  });
};

export const runTest = async source => {
  return await queue.add(async () => testRunner(source));
};
