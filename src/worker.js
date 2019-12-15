import tape from 'tape';

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
  return new Promise(resolve => {
    const results = [];
    tape
      .createStream({ objectMode: true })
      .on('data', row => {
        results.push(row);
      })
      .on('end', () => {
        resolve(results);
      });
    evaluate(source);
  });
};
