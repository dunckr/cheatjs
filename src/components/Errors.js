import React from 'react';

export class Errors extends React.Component {
  render() {
    const { errors } = this.props;
    return <p dangerouslySetInnerHTML={{ __html: errors }} />;
  }
}
