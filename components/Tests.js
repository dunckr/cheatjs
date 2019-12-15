import React from 'react';

import Assertion from './Assertion';
import { testRunner } from '../src/utils/testRunner';

class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: false,
      results: []
    };
  }

  runTests(source) {
    this.setState({ testing: true }, () => {
      testRunner(source).then(results => {
        this.setState({
          results,
          testing: false
        });
      });
    });
  }

  componentDidMount() {
    const { source } = this.props;
    this.runTests(source);
  }

  componentWillUpdate(nextProps, nextState) {
    const { testing } = nextState;
    const { source } = nextProps;
    if (!testing && source !== this.props.source) {
      this.runTests(source);
    }
  }

  render() {
    const { results, testing } = this.state;
    if (testing) {
      return null;
    }
    return (
      <ul>
        {results.map(v => (
          <Assertion {...v} />
        ))}
      </ul>
    );
  }
}

export default Tests;
