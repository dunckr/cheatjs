(this.webpackJsonpcheatjs=this.webpackJsonpcheatjs||[]).push([[0],{100:function(e,t){},110:function(e,t){},122:function(e,t){},126:function(e,t){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),s=n(7),o=n(15),i=n(17),u=n(16),l=n(18),p=n(9),m=n.n(p),d=n(8),f=n(60),h=n.n(f),b=(n(70),function(e){var t=e.errors;return r.a.createElement("p",{className:"errors",dangerouslySetInnerHTML:{__html:t}})}),y=(n(71),function(e){var t=e.body;return"failed"!==e.state?r.a.createElement("span",{className:"ok"},"\u2714"):r.a.createElement(b,{errors:t})}),v=n(36),E=n(61),g=n.n(E),j=(n(74),n(75),n(76),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=n.onChange.bind(Object(d.a)(n)),n.onKeyDown=n.onKeyDown.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"onChange",value:function(){var e,t=(e=this.ref.innerHTML,g()(e.replace(/<br>/gm,"\n").replace(/<\/?[^>]*>/gm,"")));this.props.onChange(t)}},{key:"onKeyDown",value:function(e){9===e.keyCode&&(document.execCommand("insertHTML",!1,"&#009"),e.preventDefault())}},{key:"render",value:function(){var e,t=this,n=this.props.initialSource,a=(e=n,Object(v.highlight)(e,v.languages.javascript));return r.a.createElement("pre",{ref:function(e){t.ref=e},className:"prism-code",contentEditable:!0,onInput:this.onChange,onKeyDown:this.onKeyDown,dangerouslySetInnerHTML:{__html:a}})}}]),t}(a.Component)),_=n(37),x=n(26),O=n(2),A=n.n(O),S=n(62),k=n(63),w=n.n(k),N=A.a.constants,C={expect:S},T=new w.a({concurrency:1}),R=function(e){return new Promise((function(t){x.mocha.suite.suites=[],x.mocha.setup({ui:"bdd",reporter:function e(n){Object(s.a)(this,e);var a=[];n.on(N.EVENT_TEST_PASS,(function(e){a.push(e)})),n.on(N.EVENT_TEST_FAIL,(function(e){a.push(e)})),n.on(N.EVENT_RUN_END,(function(){t(a)}))},ignoreLeaks:!1,bail:!1});var n=Object.keys(C),a=n.map((function(e){return C[e]}));Function.apply(void 0,Object(_.a)(n).concat([e])).apply(void 0,Object(_.a)(a)),x.mocha.run()}))},U=function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(T.add((function(){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R(e));case 1:case"end":return t.stop()}}))})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},q=(n(149),function(){return r.a.createElement("p",{className:"pending"},"***")}),D=(n(150),1e3),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={results:[],source:e.source.replace(/^\s+/g,"")},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.runTests=h()(n.runTests.bind(Object(d.a)(n)),D),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.runTests()}},{key:"handleChange",value:function(e){this.setState({source:e}),this.runTests()}},{key:"runTests",value:function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.state.source,n.prev=1,n.next=4,m.a.awrap(U(e));case 4:t=n.sent,this.setState({results:t,errors:void 0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),this.setState({errors:n.t0});case 11:case"end":return n.stop()}}),null,this,[[1,8]])}},{key:"renderResults",value:function(){var e=this.state,t=e.results,n=e.errors;return n?r.a.createElement(b,{errors:n}):t.length?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(y,Object.assign({key:t},e))}))):r.a.createElement(q,null)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.documentation,a=e.support,c=this.state.source;return r.a.createElement("div",{className:"environment"},r.a.createElement("a",{id:t,href:"#".concat(t)},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Docs"),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Support")),r.a.createElement(j,{initialSource:c,onChange:this.handleChange}),r.a.createElement("div",{className:"results"},this.renderResults()))}}]),t}(r.a.Component),J={title:"Array.from",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_from",source:"\ndescribe('Array.from', () => {\n  it('creates an array', () => {\n    expect(Array.from('123')).toEqual(['1', '2', '3']);\n  });\n  it('can be passed a map function', () => {\n    expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6]);\n  });\n});"},z={title:"Array.every",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_every",source:"\ndescribe('Array.every', () => {\n  it('tests every element passes the function', () => {\n    expect([11, 12, 13].every(x => x > 10)).toEqual(true);\n  });\n});"},W={title:"Array.filter",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_filter",source:"\ndescribe('Array.filter', () => {\n  it('creates new array from elements which pass the function', () => {\n    expect([1, 2, 3, 4, 5].filter(x => x > 3)).toEqual([4, 5]);\n  });\n});"},I={title:"Array.find",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_find",source:"\ndescribe('Array.find', () => {\n  it('returns the value of first element that passes the function', () => {\n    expect([1, 2, 3, 4, 5].find(x => x > 3)).toEqual(4);\n  });\n  describe('Array.findIndex', () => {\n    it('returns the index of first element that passes the function', () => {\n      expect([1, 2, 3, 4, 5].findIndex(x => x > 3)).toEqual(3);\n    });\n  });\n});"},L={title:"Array.includes",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_includes",source:"\ndescribe('Array.includes', () => {\n  it('tests an array includes a value', () => {\n    expect([1, 2, 3, 4, 5].includes(3)).toEqual(true);\n  });\n});"},H={title:"Array.map",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_map",source:"\ndescribe('Array.map', () => {\n  it('creates a new array calling the function on every element', () => {\n    expect([1, 2, 3].map(x => x + 1)).toEqual([2, 3, 4]);\n  });\n});"},M={title:"Array.reduce",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_reduce",source:"\ndescribe('Array.reduce', () => {\n  it('applies a function against the accumulator for every element and reduces to a single value', () => {\n    expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);\n  });\n  describe('Array.reduceRight', () => {\n    it('calls reduce calling the elements in right-to-left order', () => {\n      expect([1, 2, 3].reduce((acc, x) => acc + x, 0)).toEqual(6);\n    });\n  });\n});"},F={title:"Array.some",tags:["array"],documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",support:"https://caniuse.com/#feat=mdn-javascript_builtins_array_some",source:"\ndescribe('Array.some', () => {\n  it('tests at least one element passes the function', () => {\n    expect([1, 2, 3].some(x => x === 3)).toEqual(true);\n  });\n});"},K=(n(151),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"title"},"cheatjs.com"),r.a.createElement("div",{className:"github"},r.a.createElement("a",{className:"github-button",href:"https://github.com/dunckr","aria-label":"Follow @dunckr on GitHub"},"Follow @dunckr"),r.a.createElement("a",{className:"github-button",href:"https://github.com/dunckr/cheatjs.com","aria-label":"Star dunckr/cheatjs.com on GitHub"},"Star")),r.a.createElement(G,J),r.a.createElement(G,z),r.a.createElement(G,W),r.a.createElement(G,I),r.a.createElement(G,L),r.a.createElement(G,L),r.a.createElement(G,H),r.a.createElement(G,M),r.a.createElement(G,F),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"by ",r.a.createElement("a",{href:"https://dunckr.com/"},"dunckr"))))}}]),t}(r.a.Component)),V=document.getElementById("root");V.hasChildNodes()?Object(c.hydrate)(r.a.createElement(K,null),V):Object(c.render)(r.a.createElement(K,null),V)},21:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=21},47:function(e,t){},64:function(e,t,n){e.exports=n(152)},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},81:function(e,t){},83:function(e,t){},99:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.a331333a.chunk.js.map