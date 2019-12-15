import React from 'react';

import { runTests } from 'workerize-loader!../src/worker'; // eslint-disable-line import/no-webpack-loader-syntax

class Environment extends React.Component {
  constructor(props) {
    super(props);
    runTests().then(() => {
      console.log('runner done');
    });
  }

  render() {
    // <Assertion source={source} />
    return (
      <div>
        return <h1>test</h1>;
      </div>
    );
  }
}

export default Environment;
