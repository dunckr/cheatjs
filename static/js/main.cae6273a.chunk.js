(this.webpackJsonpcheatjs=this.webpackJsonpcheatjs||[]).push([[0],{101:function(e,t){},102:function(e,t){},112:function(e,t){},124:function(e,t){},128:function(e,t){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"from",(function(){return v})),n.d(a,"every",(function(){return y})),n.d(a,"filter",(function(){return j})),n.d(a,"find",(function(){return g})),n.d(a,"includes",(function(){return O})),n.d(a,"map",(function(){return E})),n.d(a,"reduce",(function(){return _})),n.d(a,"some",(function(){return x}));var r={};n.r(r),n.d(r,"assign",(function(){return S})),n.d(r,"entries",(function(){return k})),n.d(r,"is",(function(){return A})),n.d(r,"keys",(function(){return w})),n.d(r,"values",(function(){return C}));var c=n(0),s=n.n(c),o=n(36),i=n(8),u=n(15),l=n(17),p=n(16),d=n(6),b=n(18),m=n(19),f=n(60),h=n.n(f),v={title:"Array.from",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_from",source:"\ndescribe('Array.from', () => {\n  it('creates an array', () => {\n    expect(Array.from('123')).toEqual(['1', '2', '3']);\n  });\n  it('can be passed a map function', () => {\n    expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6]);\n  });\n});"},y={title:"Array.every",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_every",source:"\ndescribe('Array.every', () => {\n  it('tests every element passes the function', () => {\n    expect([11, 12, 13].every(x => x > 10)).toEqual(true);\n  });\n});"},j={title:"Array.filter",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_filter",source:"\ndescribe('Array.filter', () => {\n  it('creates new array from elements which pass the function', () => {\n    expect([1, 2, 3, 4, 5].filter(x => x > 3)).toEqual([4, 5]);\n  });\n});"},g={title:"Array.find",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_find",source:"\ndescribe('Array.find', () => {\n  it('returns the value of first element that passes the function', () => {\n    expect([1, 2, 3, 4, 5].find(x => x > 3)).toEqual(4);\n  });\n  describe('Array.findIndex', () => {\n    it('returns the index of first element that passes the function', () => {\n      expect([1, 2, 3, 4, 5].findIndex(x => x > 3)).toEqual(3);\n    });\n  });\n});"},O={title:"Array.includes",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_includes",source:"\ndescribe('Array.includes', () => {\n  it('tests an array includes a value', () => {\n    expect([1, 2, 3, 4, 5].includes(3)).toEqual(true);\n  });\n});"},E={title:"Array.map",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_map",source:"\ndescribe('Array.map', () => {\n  it('creates a new array calling the function on every element', () => {\n    expect([1, 2, 3].map(x => x + 1)).toEqual([2, 3, 4]);\n  });\n});"},_={title:"Array.reduce",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_reduce",source:"\ndescribe('Array.reduce', () => {\n  it('applies a function against the accumulator for every element and reduces to a single value', () => {\n    expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);\n  });\n  describe('Array.reduceRight', () => {\n    it('calls reduce calling the elements in right-to-left order', () => {\n      expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);\n    });\n  });\n});"},x={title:"Array.some",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_some",source:"\ndescribe('Array.some', () => {\n  it('tests at least one element passes the function', () => {\n    expect([1, 2, 3].some(x => x === 3)).toEqual(true);\n  });\n});"},S={title:"Object.assign",tags:["object"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",support:"https://caniuse.com/#feat=mdn-javascript_builtins_object_assign",source:"\ndescribe('Object.assign', () => {\n  it('copies properties from source(s) to a target', () => {\n    const source = { a: 1, b: 2 };\n    const target = { b: 100, c: 3 };\n    expect(Object.assign(target, source)).toEqual({ a: 1, b: 2, c: 3 });\n    expect(source).toEqual({ a: 1, b: 2 });\n    expect(target).toEqual({ a: 1, b: 2, c: 3 });\n  });\n});"},k={title:"Object.entries",tags:["object"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",support:"https://caniuse.com/#feat=mdn-javascript_builtins_object_entries",source:"\ndescribe('Object.entries', () => {\n  it(\"returns an array of the object's properties in [key, value] pairs\", () => {\n    expect(Object.entries({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);\n  });\n});"},A={title:"Object.is",tags:["object"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",support:"https://caniuse.com/#feat=mdn-javascript_builtins_object_is",source:"\ndescribe('Object.is', () => {\n  it('returns if two values are the same', () => {\n    expect(Object.is('foo', 'foo')).toEqual(true);\n    expect(Object.is(window, window)).toEqual(true);\n\n    expect(Object.is('foo', 'bar')).toEqual(false);\n    expect(Object.is([], [])).toEqual(false);\n\n    const foo = { a: 1 };\n    const bar = { a: 1 };\n    expect(Object.is(foo, foo)).toEqual(true);\n    expect(Object.is(foo, bar)).toEqual(false);\n    \n    expect(Object.is(null, null)).toEqual(true);\n  });\n});"},w={title:"Object.keys",tags:["object"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",support:"https://caniuse.com/#feat=mdn-javascript_builtins_object_keys",source:"\ndescribe('Object.keys', () => {\n  it('returns an array of the property keys', () => {\n    expect(Object.keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);\n  });\n});"},C={title:"Object.values",tags:["object"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",support:"https://caniuse.com/#feat=mdn-javascript_builtins_object_values",source:"\ndescribe('Object.values', () => {\n  it('returns an array of the property values', () => {\n    expect(Object.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);\n  });\n});"},q=n(9),N=n.n(q),R=n(61),T=n.n(R),U=(n(72),function(e){var t=e.message;return s.a.createElement("p",{className:"errors",dangerouslySetInnerHTML:{__html:t}})}),G=(n(73),function(e){var t=e.error;return"failed"!==e.state?s.a.createElement("span",{className:"ok"},"\u2714"):s.a.createElement(U,{message:t})}),J=n(37),z=n(62),W=n.n(z),D=(n(76),n(77),n(78),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).onChange=n.onChange.bind(Object(d.a)(n)),n.onKeyDown=n.onKeyDown.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"onChange",value:function(){var e,t=(e=this.ref.innerHTML,W()(e.replace(/<br>/gm,"\n").replace(/<\/?[^>]*>/gm,"")));this.props.onChange(t)}},{key:"onKeyDown",value:function(e){9===e.keyCode&&(document.execCommand("insertHTML",!1,"&#009"),e.preventDefault())}},{key:"render",value:function(){var e,t=this,n=this.props.initialSource,a=(e=n,Object(J.highlight)(e,J.languages.javascript));return s.a.createElement("pre",{ref:function(e){t.ref=e},className:"prism-code",contentEditable:!0,onInput:this.onChange,onKeyDown:this.onKeyDown,dangerouslySetInnerHTML:{__html:a}})}}]),t}(c.Component)),L=n(65),I=n(27),F=n(2),H=n.n(F),M=n(63),K=n(64),P=n.n(K),V=H.a.constants,B={expect:M},Q=new P.a({concurrency:1}),X=function(e){return new Promise((function(t){I.mocha.suite.suites=[],I.mocha.setup({ui:"bdd",reporter:function e(n){Object(i.a)(this,e);var a=[];n.on(V.EVENT_TEST_PASS,(function(e){a.push(e)})),n.on(V.EVENT_TEST_FAIL,(function(e,t){a.push(Object(L.a)({},e,{error:t}))})),n.on(V.EVENT_RUN_END,(function(){t(a)}))},ignoreLeaks:!1,bail:!1});var n=Object.keys(B),a=n.map((function(e){return B[e]}));Function.apply(void 0,Object(m.a)(n).concat([e])).apply(void 0,Object(m.a)(a)),I.mocha.run()}))},Y=function(e){return N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.awrap(Q.add((function(){return N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",X(e));case 1:case"end":return t.stop()}}))})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},Z=(n(151),function(){return s.a.createElement("p",{className:"pending"},"***")}),$=(n(152),1e3),ee=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={results:[],source:e.source.replace(/^\s+/g,"")},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.runTests=T()(n.runTests.bind(Object(d.a)(n)),$),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.runTests()}},{key:"handleChange",value:function(e){this.setState({source:e}),this.runTests()}},{key:"runTests",value:function(){var e,t;return N.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.state.source,n.prev=1,n.next=4,N.a.awrap(Y(e));case 4:t=n.sent,this.setState({results:t,errors:void 0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),this.setState({errors:n.t0});case 11:case"end":return n.stop()}}),null,this,[[1,8]])}},{key:"renderResults",value:function(){var e=this.state,t=e.results,n=e.errors;return n?s.a.createElement(U,{message:n}):t.length?s.a.createElement("ul",null,t.map((function(e,t){return s.a.createElement(G,Object.assign({key:t},e))}))):s.a.createElement(Z,null)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.documentation,a=e.support,r=this.state.source;return s.a.createElement("div",{className:"environment"},s.a.createElement("a",{id:t,href:"#".concat(t)},s.a.createElement("h1",null,t)),s.a.createElement("div",{className:"links"},s.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Docs"),s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Support")),s.a.createElement(D,{initialSource:r,onChange:this.handleChange}),s.a.createElement("div",{className:"results"},this.renderResults()))}}]),t}(s.a.Component),te=(n(153),[].concat(Object(m.a)(Object.values(a)),Object(m.a)(Object.values(r)))),ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={input:"",examples:te},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value,n=te;t&&t.length>0&&(n=te.filter((function(e){return h()(t.toLowerCase(),e.title.toLowerCase())}))),this.setState({input:t,examples:n})}},{key:"render",value:function(){var e=this.state,t=e.input,n=e.examples;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",{className:"title"},"cheatjs.com"),s.a.createElement("div",{className:"github"},s.a.createElement("a",{className:"github-button",href:"https://github.com/dunckr","aria-label":"Follow @dunckr on GitHub"},"Follow @dunckr"),s.a.createElement("a",{className:"github-button",href:"https://github.com/dunckr/cheatjs.com","aria-label":"Star dunckr/cheatjs.com on GitHub"},"Star")),s.a.createElement("p",{className:"hint"},s.a.createElement("span",{className:"hint-label"},"*Hint*"),"Edit the examples and learn how to use the APIs"),s.a.createElement("div",{className:"search"},s.a.createElement("input",{type:"text",name:"search",placeholder:"Filter by method name:",autoFocus:!0,value:t,onChange:this.handleChange})),n.map((function(e){return s.a.createElement(ee,e)})),s.a.createElement("div",{className:"footer"},s.a.createElement("p",null,"by ",s.a.createElement("a",{href:"https://dunckr.com/"},"dunckr"))))}}]),t}(s.a.Component),ae=document.getElementById("root");ae.hasChildNodes()?Object(o.hydrate)(s.a.createElement(ne,null),ae):Object(o.render)(s.a.createElement(ne,null),ae)},22:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=22},47:function(e,t){},66:function(e,t,n){e.exports=n(154)},72:function(e,t,n){},73:function(e,t,n){},78:function(e,t,n){},83:function(e,t){},85:function(e,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.cae6273a.chunk.js.map