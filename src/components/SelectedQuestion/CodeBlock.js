import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darkula } from "react-syntax-highlighter/dist/esm/styles/hljs/";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language="javascript" style={darkula}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;