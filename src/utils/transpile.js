import { transform } from 'buble';

export const transpile = (source, scope = {}) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  // const { code } = transform(source, {
  //   transforms: {
  //     dangerousForOf: true,
  //     dangerousTaggedTemplateString: true
  //   }
  // });
  //
  console.log(source);
  // eslint-disable-next-line
  const fn = new Function(...scopeKeys, source);
  // eslint-disable-next-line
  window.eval(fn(...scopeValues));
};
