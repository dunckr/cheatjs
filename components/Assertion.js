import React from 'react';

class Tests extends React.Component {
  // actual : 1
  // expected : 1
  // id : 0
  // name : "one equals one"
  // objectPrintDepth : 5
  // ok : true
  // operator : "equal"
  // skip : undefined
  // Example : 0
  // type : "assert"
  render() {
    console.log(this.props);
    const { type, ok, name } = this.props;

    if (type !== 'assert') {
      return null;
    }
    return (
      <li>
        {ok ? '✅' : '❌'}
        {name}
      </li>
    );
  }
}

export default Tests;
