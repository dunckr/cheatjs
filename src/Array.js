export const from = {
  title: 'Array.from',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
  support: 'https://caniuse.com/#feat=array-find',
  source: `
test('Array.from', t => {
  t.equal(Array.from('123'), [1, 2, 3], 'creates new Array');
  t.equal(Array.from('123', x => Number(x) + 1), [2, 3, 4], 'creates new Array with map');
  t.end();
});`
};

export const entries = {
  title: 'Array.entries',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.entries', t => {
    t.end();
});`
};

export const every = {
  title: 'Array.every',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.every', t => {
    t.end();
});`
};

export const fill = {
  title: 'Array.fill',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.fill', t => {
    t.end();
});`
};

export const filter = {
  title: 'Array.filter',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.filter', t => {
    const array = [1, 2, 3, 4, 5];

    const output = array.filter(e => e > 3);

    t.ok(output, [4, 5], 'only the elements that return true in the anonymous function are kepy in the array');

    t.end();
});`
};

export const find = {
  title: 'Array.find',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.find', t => {
    t.end();
});`
};

export const findIndex = {
  title: 'Array.findIndex',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.findIndex', t => {
    t.end();
});`
};

export const flat = {
  title: 'Array.flat',
  tags: ['array'],
  documentation: '',
  support: '',
  source: `
test('Array.flat', t => {
    t.end();
});`
};
// ....
