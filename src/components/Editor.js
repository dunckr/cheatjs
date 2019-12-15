import React, { Component } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import decode from 'unescape';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './Editor.css';

const htmlStringify = html =>
  decode(html.replace(/<br>/gm, '\n').replace(/<\/?[^>]*>/gm, ''));

const syntaxHighlighting = code => highlight(code, languages.javascript);

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  onChange() {
    const source = htmlStringify(this.ref.innerHTML);
    this.props.onChange(source);
  }

  onKeyDown(e) {
    if (e.keyCode === 9) {
      document.execCommand('insertHTML', false, '&#009');
      e.preventDefault();
    }
  }

  render() {
    const { initialSource } = this.props;
    const html = syntaxHighlighting(initialSource);
    return (
      <pre
        ref={node => {
          this.ref = node;
        }}
        className="prism-code"
        contentEditable={true}
        onInput={this.onChange}
        onKeyDown={this.onKeyDown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}
