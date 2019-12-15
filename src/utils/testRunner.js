import tape from 'tape-catch';

import { transpile } from '../utils/transpile';

const END = 'end';

export const testRunner = source => {
  return new Promise((resolve, reject) => {
    const results = [];
    tape
      .createStream({
        objectMode: true
      })
      .on('data', row => {
        results.push(row);
        if (row.type === END) {
          resolve(results);
        }
      });
    transpile(source, {
      test: tape
    });
  });
};
