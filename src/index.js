import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

// import * as expect from 'expect';
// import { testRunner } from './testRunner';
//
// const code = () => {
//   describe('test suite', function() {
//     it('first', function() {
//       expect(1).toEqual(1);
//     });
//     it('second', function() {
//       expect(1).toEqual(1);
//     });
//   });
// };
//
// const start = async () => {
//   try {
//     const output = await testRunner(code);
//     console.log('success', output);
//   } catch (e) {
//     console.log('error', e);
//   }
// };
//
// start();

ReactDOM.render(<App />, document.getElementById('root'));
