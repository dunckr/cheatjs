import React from 'react';
import debounce from 'lodash.debounce';
import Worker from 'workerize-loader!../worker'; // eslint-disable-line import/no-webpack-loader-syntax

import { Assertion } from './Assertion';
import { Editor } from './Editor';
import { Errors } from './Errors';

const RUN_TESTS_DELAY = 1000;

export class Environment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logs: [], source: props.initialSource };
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
      return <Errors errors={errors} />;
    }
    return (
      <ul>
        {logs.map((v, k) => {
          return <Assertion key={k} {...v} />;
        })}
      </ul>
    );
  }
  render() {
    const { source } = this.state;
    return (
      <div className="container">
        <Editor initialSource={source} onChange={this.handleChange} />
        {this.renderLogs()}
      </div>
    );
  }
}
