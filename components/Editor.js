import React from 'react';
import { runTests } from 'workerize-loader!../src/worker'; // eslint-disable-line import/no-webpack-loader-syntax

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>test</h1>;
  }
}

export default Editor;
