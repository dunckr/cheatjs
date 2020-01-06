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

export class App extends React.Component {
  render() {
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
        <Environment {...from} />
        <Environment {...every} />
        <Environment {...filter} />
        <Environment {...find} />
        <Environment {...includes} />
        <Environment {...includes} />
        <Environment {...map} />
        <Environment {...reduce} />
        <Environment {...some} />
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
