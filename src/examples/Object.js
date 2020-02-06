export const assign = {
  title: 'Object.assign',
  tags: ['object'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_object_assign',
  source: `
describe('Object.assign', () => {
  it('copies properties from source(s) to a target', () => {
    const source = { a: 1, b: 2 };
    const target = { b: 100, c: 3 };
    expect(Object.assign(target, source)).toEqual({ a: 1, b: 2, c: 3 });
    expect(source).toEqual({ a: 1, b: 2 });
    expect(target).toEqual({ a: 1, b: 2, c: 3 });
  });
});`
};

export const entries = {
  title: 'Object.entries',
  tags: ['object'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_object_entries',
  source: `
describe('Object.entries', () => {
  it("returns an array of the object's properties in [key, value] pairs", () => {
    expect(Object.entries({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });
});`
};

export const is = {
  title: 'Object.is',
  tags: ['object'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_object_is',
  source: `
describe('Object.is', () => {
  it('returns if two values are the same', () => {
    expect(Object.is('foo', 'foo')).toEqual(true);
    expect(Object.is(window, window)).toEqual(true);

    expect(Object.is('foo', 'bar')).toEqual(false);
    expect(Object.is([], [])).toEqual(false);

    const foo = { a: 1 };
    const bar = { a: 1 };
    expect(Object.is(foo, foo)).toEqual(true);
    expect(Object.is(foo, bar)).toEqual(false);
    
    expect(Object.is(null, null)).toEqual(true);
  });
});`
};

export const keys = {
  title: 'Object.keys',
  tags: ['object'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_object_keys',
  source: `
describe('Object.keys', () => {
  it('returns an array of the property keys', () => {
    expect(Object.keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
  });
});`
};

export const values = {
  title: 'Object.values',
  tags: ['object'],
  documentation:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
  support: 'https://caniuse.com/#feat=mdn-javascript_builtins_object_values',
  source: `
describe('Object.values', () => {
  it('returns an array of the property values', () => {
    expect(Object.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });
});`
};
