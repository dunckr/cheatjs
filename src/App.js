import React from 'react';

import { Environment } from './components/Environment';
import {
  from,
  entries,
  every,
  fill,
  filter,
  find,
  findIndex,
  flat
} from './Array';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Environment {...from} />
        <Environment {...entries} />
        <Environment {...every} />
        <Environment {...fill} />
        <Environment {...filter} />
        <Environment {...find} />
        <Environment {...findIndex} />
        <Environment {...flat} />
        <Environment {...find} />
      </div>
    );
  }
}
