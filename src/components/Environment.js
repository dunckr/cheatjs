import React from 'react';
import debounce from 'lodash.debounce';

import { Assertion } from './Assertion';
import { Editor } from './Editor';
import { Errors } from './Errors';
import { testRunner } from '../testRunner';
import './Environment.css';

const RUN_TESTS_DELAY = 1000;

export class Environment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], source: props.source.replace(/^\s+/g, '') };
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
      const results = await testRunner(source);
      this.setState({ results, errors: undefined });
    } catch (errors) {
      this.setState({ errors });
    }
  }

  renderResults() {
    const { results, errors } = this.state;
    if (errors) {
      return <Errors errors={errors} />;
    }
    return (
      <ul>
        {results.map((v, k) => {
          return <Assertion key={k} {...v} />;
        })}
      </ul>
    );
  }

  render() {
    const { title } = this.props;
    const { source } = this.state;
    return (
      <div className="environment">
        <h1>{title}</h1>
        <Editor initialSource={source} onChange={this.handleChange} />
        {this.renderResults()}
      </div>
    );
  }
}
