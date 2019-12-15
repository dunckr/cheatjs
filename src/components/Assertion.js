import React from 'react';

interface Props {
  type: string;
  name: string | number;
  ok: boolean;
  skip: boolean;
  actual: string;
  expected: string;
  operator: string;
  error: Error;
}

class Assertion extends React.Component<Props> {
  renderError() {
    const { actual, name, expected, operator, error } = this.props;
    return (
      <div className="error">
        <div>{`✖ ${name}`}</div>
        <div>-----------------</div>
        <div>{`operator: ${operator}`}</div>
        <div>{`expected: ${expected}`}</div>
        <div>{`actual: ${actual}`}</div>
        <div>{`stack: ${error.stack}`}</div>
      </div>
    );
  }

  renderIcon() {
    const { ok, skip, name, type } = this.props;
    if (type !== 'assert') {
      return <span className="title">{name}</span>;
    }
    if (skip) {
      return <span className="skip">{','}</span>;
    }
    if (ok) {
      return <span className="ok">{`✔ ${name}`}</span>;
    }
    return this.renderError();
  }

  render() {
    const { name } = this.props;
    return <li key={name}>{this.renderIcon()}</li>;
  }
}

export default Assertion;
