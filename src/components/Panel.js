import cx from 'classnames'

const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

export default Panel
