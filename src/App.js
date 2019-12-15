import React from 'react';
import debounce from 'lodash.debounce';
import Worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

import { Assertion } from './components/Assertion';
import { Editor } from './components/Editor';

const RUN_TESTS_DELAY = 1000;

const initialSource = `test('first example', t => {
    t.plan(2);
    
    t.equal(1, 2, 'one equals one');
    t.equal(2, 2, 'two plus two equals four');

    t.end();
});`;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logs: [], source: initialSource };
    this.worker = new Worker();
    this.handleChange = this.handleChange.bind(this);
    this.runTests = debounce(this.runTests.bind(this), RUN_TESTS_DELAY);
  }
  componentDidMount() {
    this.runTests();
  }

  handleChange(source) {
    this.setState({ source });
    this.runTests();
  }
  async runTests() {
    const { source } = this.state;
    try {
      const logs = await this.worker.testRunner(source);
      this.setState({ logs, errors: undefined });
    } catch (errors) {
      this.setState({ errors });
    }
  }
  renderLogs() {
    const { logs, errors } = this.state;
    if (errors) {
      return <p>{errors.toString()}</p>;
    }
    return logs.map((v, k) => {
      return <Assertion key={k} {...v} />;
    });
  }
  render() {
    const { source } = this.state;
    return (
      <div>
        <Editor initialSource={source} onChange={this.handleChange} />
        {this.renderLogs()}
      </div>
    );
  }
}
