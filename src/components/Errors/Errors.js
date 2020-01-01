import React from 'react';

import './Errors.css';

export const Errors = ({ errors }) => (
  <p className="errors" dangerouslySetInnerHTML={{ __html: errors }} />
);
