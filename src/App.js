import React from 'react';

import { Environment } from './components/Environment';
import { Example } from './Example';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Environment initialSource={Example} />
      </div>
    );
  }
}
