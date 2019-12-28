import React from 'react';

import './Assertion.css';

export class Assertion extends React.Component {
  renderError() {
    const { body } = this.props;
    return (
      <div className="error">
        <div>{`✖ ${body}`}</div>
      </div>
    );
  }

  renderIcon() {
    const { state } = this.props;
    if (state !== 'failed') return <span className="ok">{`✔`}</span>;
    return this.renderError();
  }

  render() {
    return <li>{this.renderIcon()}</li>;
  }
}
