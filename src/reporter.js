import Runner from 'mocha/lib/runner';

const CONSTANTS = Runner.constants;

export class Reporter {
  static browserOnly = true;

  constructor(runner) {
    runner.on(CONSTANTS.EVENT_TEST_PASS, test => {
      console.log('pass', test.body);
    });
    runner.on(CONSTANTS.EVENT_TEST_FAIL, test => {
      console.log('fail', test.body);
    });
  }
}
