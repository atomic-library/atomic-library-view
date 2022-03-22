// ------------------------IMPORTS-------------------------//
// dependecies
import toast from 'cogo-toast'
import copy from 'copy-to-clipboard'
import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'
// icons
import { IoMdClipboard } from 'react-icons/io'
// theme
import PrismTheme from 'prism-react-renderer/themes/vsDark'
// -----------------------END-IMPORTS------------------------//

// -----------------------cOMPONENT------------------------//
const CodeBlock = ({ code, language }) => {
  const copyToClipboard = () => {
    copy(code)
    toast.success('Copied to clipboard', {
      position: 'bottom-center'
    })
  }

  return (
    <Highlight
      {...defaultProps}
      theme={PrismTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code codeBlock__pre`} style={style}>

          {/* ------------COPY--------- */}
          <a onClick={copyToClipboard} className='codeBlock__link'>
            <IoMdClipboard className='codeBlock__icon' />
          </a>

          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
