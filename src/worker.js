import tape from 'tape-catch';

const requires = {
  test: tape
};

const evaluate = source => {
  const requireKeys = Object.keys(requires);
  const requireValues = requireKeys.map(key => requires[key]);
  const fn = Function(...requireKeys, source);
  fn(...requireValues);
};

export const testRunner = source => {
  return new Promise((resolve, reject) => {
    const results = [];
    try {
      tape
        .createStream({ objectMode: true })
        .on('data', row => {
          results.push(row);
        })
        .on('end', () => {
          resolve(results);
        });
      evaluate(source);
    } catch (e) {
      console.log('error', e);
      reject(e);
    }
  });
};
