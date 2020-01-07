import React from 'react';

import { Environment } from './components/Environment/Environment';
import {
  from,
  every,
  filter,
  find,
  includes,
  map,
  reduce,
  some
} from './examples/Array';
import './App.css';
import fuzzysearch from 'fuzzysearch';

const EXAMPLES = [from, every, filter, find, includes, map, reduce, some];

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
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Filter by method name:"
            autoFocus="true"
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
