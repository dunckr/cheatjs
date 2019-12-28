import React from 'react';

import { Environment } from './components/Environment';
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
} from './Array';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
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
      </div>
    );
  }
}
