import React from 'react';

import { Environment } from './components/Environment/Environment';
import {
  from,
  every,
  filter,
  find,
  flat,
  includes,
  map,
  reduce,
  some
} from './docs/Array';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">cheatjs.com</h1>
        <Environment {...from} />
        <Environment {...every} />
        <Environment {...filter} />
        <Environment {...find} />
        <Environment {...flat} />
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
