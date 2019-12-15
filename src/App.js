import React from 'react';
import debounce from 'lodash.debounce';

import Worker from 'workerize-loader!./worker';
import Assertion from './components/Assertion'; // eslint-disable-line import/no-webpack-loader-syntax

const RUN_TESTS_DELAY = 1000;

const source = `test('first example', t => {
    t.plan(2);

    t.equal(1, 2, 'one equals one');
    t.equal(2, 2, 'two plus two equals four');

    t.end();
});`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: [] };
    this.worker = new Worker();
    this.runTests = debounce(this.runTests.bind(this), RUN_TESTS_DELAY);
  }
  async runTests() {
    const output = await this.worker.testRunner(source);
    this.setState({ output });
  }
  componentDidCatch(error) {
    console.log('did catch', error);
  }
  render() {
    return (
      <div>
        <h1>test</h1>
        <input
          onChange={() => {
            this.runTests();
          }}
        />
        {this.state.output.map(output => {
          return <Assertion {...output} />;
        })}
      </div>
    );
  }
}

export default App;
