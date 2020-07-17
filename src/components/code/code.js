// src/components/CodeBlock.jsx
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from "prism-react-renderer/themes/dracula"

export default ({ children, className }) => {
  const language = className.replace(/language-/, "") || ""

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
