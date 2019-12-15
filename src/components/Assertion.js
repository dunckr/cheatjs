import React from 'react';
import './Assertion.css';

export class Assertion extends React.Component {
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
    return <li>{this.renderIcon()}</li>;
  }
}
