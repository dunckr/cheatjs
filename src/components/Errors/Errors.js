import React from 'react';

import './Errors.css';

export const Errors = ({ message }) => (
  <p className="errors" dangerouslySetInnerHTML={{ __html: message }} />
);
