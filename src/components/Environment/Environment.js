import React from 'react';
import debounce from 'lodash.debounce';

import { Assertion } from '../Assertion/Assertion';
import { Editor } from '../Editor/Editor';
import { Errors } from '../Errors/Errors';
import { runTest } from '../../utils/testRunner';
import { Pending } from '../Pending/Pending';
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
      const results = await runTest(source);
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
    if (results.length) {
      return (
        <ul>
          {results.map((v, k) => {
            return <Assertion key={k} {...v} />;
          })}
        </ul>
      );
    }
    return <Pending />;
  }

  render() {
    const { title, documentation, support } = this.props;
    const { source } = this.state;
    return (
      <div className="environment">
        <h1>{title}</h1>
        <div class="links">
          <a href={documentation} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <a href={support} target="_blank" rel="noopener noreferrer">
            Support
          </a>
        </div>
        <Editor initialSource={source} onChange={this.handleChange} />
        <div className="results">{this.renderResults()}</div>
      </div>
    );
  }
}
