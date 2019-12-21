import { mocha } from 'mocha';
import expect from 'expect';

mocha.setup('bdd');
// your tests here
const source = `describe('test suite', function() {
  it('should work', function() {
    expect(1).toEqual(2);
  });
});`;

const requires = {
  expect: expect
};

const requireKeys = Object.keys(requires);
const requireValues = requireKeys.map(key => requires[key]);
const fn = Function(...requireKeys, source);
fn(...requireValues);

// run tests
mocha.run();

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { App } from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));
