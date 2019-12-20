import React from 'react';

export const Errors = props => {
  const { errors } = props;
  return <p dangerouslySetInnerHTML={{ __html: errors }} />;
};
