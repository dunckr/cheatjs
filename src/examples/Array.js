export const from = {
  title: 'Array.from',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_from',
  source: `
describe('Array.from', () => {
  it('creates an array', () => {
    expect(Array.from('123')).toEqual(['1', '2', '3']);
  });
  it('can be passed a map function', () => {
    expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6]);
  });
});`
};

export const every = {
  title: 'Array.every',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_every',
  source: `
describe('Array.every', () => {
  it('tests every element passes the function', () => {
    expect([11, 12, 13].every(x => x > 10)).toEqual(true);
  });
});`
};

export const filter = {
  title: 'Array.filter',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_filter',
  source: `
describe('Array.filter', () => {
  it('creates new array from elements which pass the function', () => {
    expect([1, 2, 3, 4, 5].filter(x => x > 3)).toEqual([4, 5]);
  });
});`
};

export const find = {
  title: 'Array.find',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_find',
  source: `
describe('Array.find', () => {
  it('returns the value of first element that passes the function', () => {
    expect([1, 2, 3, 4, 5].find(x => x > 3)).toEqual(4);
  });
  describe('Array.findIndex', () => {
    it('returns the index of first element that passes the function', () => {
      expect([1, 2, 3, 4, 5].findIndex(x => x > 3)).toEqual(3);
    });
  });
});`
};
export const includes = {
  title: 'Array.includes',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_includes',
  source: `
describe('Array.includes', () => {
  it('tests an array includes a value', () => {
    expect([1, 2, 3, 4, 5].includes(3)).toEqual(true);
  });
});`
};

export const map = {
  title: 'Array.map',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_map',
  source: `
describe('Array.map', () => {
  it('creates a new array calling the function on every element', () => {
    expect([1, 2, 3].map(x => x + 1)).toEqual([2, 3, 4]);
  });
});`
};

export const reduce = {
  title: 'Array.reduce',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_reduce',
  source: `
describe('Array.reduce', () => {
  it('applies a function against the accumulator for every element and reduces to a single value', () => {
    expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);
  });
  describe('Array.reduceRight', () => {
    it('calls reduce calling the elements in right-to-left order', () => {
      expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);
    });
  });
});`
};

export const some = {
  title: 'Array.some',
  tags: ['array'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_array_some',
  source: `
describe('Array.some', () => {
  it('tests at least one element passes the function', () => {
    expect([1, 2, 3].some(x => x === 3)).toEqual(true);
  });
});`
};
