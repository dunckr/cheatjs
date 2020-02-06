import React from 'react';
import fuzzysearch from 'fuzzysearch';

import * as ArrayExamples from './examples/Array';
import * as ObjectExamples from './examples/Object';
import { Environment } from './components/Environment/Environment';
import './App.css';

const EXAMPLES = [
  ...Object.values(ArrayExamples),
  ...Object.values(ObjectExamples)
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      examples: EXAMPLES
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const input = event.target.value;
    let examples = EXAMPLES;
    if (input && input.length > 0) {
      examples = EXAMPLES.filter(example =>
        fuzzysearch(input.toLowerCase(), example.title.toLowerCase())
      );
    }
    this.setState({ input, examples });
  }
  render() {
    const { input, examples } = this.state;
    return (
      <div className="wrapper">
        <h1 className="title">cheatjs.com</h1>
        <div className="github">
          <a
            className="github-button"
            href="https://github.com/dunckr"
            aria-label="Follow @dunckr on GitHub"
          >
            Follow @dunckr
          </a>
          <a
            className="github-button"
            href="https://github.com/dunckr/cheatjs.com"
            aria-label="Star dunckr/cheatjs.com on GitHub"
          >
            Star
          </a>
        </div>
        <p className="hint">
          <span className="hint-label">*Hint*</span>
          Edit the examples and learn how to use the APIs
        </p>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Filter by method name:"
            autoFocus
            value={input}
            onChange={this.handleChange}
          />
        </div>
        {examples.map(example => {
          return <Environment {...example} />;
        })}
        <div className="footer">
          <p>
            {'by '}
            <a href="https://dunckr.com/">dunckr</a>
          </p>
        </div>
      </div>
    );
  }
}
