import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs/";

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
    console.log(this.props.value);
    return (
      <SyntaxHighlighter language={language} style={docco}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;

// export default function CodeBlock({ language, value }) {
//   const codeEle = useRef(null);

//   useEffect(() => {
//     console.log("CodeBlock: useEffect");
//     Prism.highlightElement(codeEle, false);
//   }, [codeEle]);

//   return (
//     <pre>
//       <code ref={codeEle} className={`language-${language}`}>
//         {value}
//       </code>
//     </pre>
//   );
// }
