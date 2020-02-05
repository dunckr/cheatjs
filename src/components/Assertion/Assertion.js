import React from 'react';

import { Errors } from '../Errors/Errors';
import './Assertion.css';

export const Assertion = props => {
  const { error, state } = props;
  if (state !== 'failed') return <span className="ok">{`✔`}</span>;
  return <Errors message={error} />;
};
