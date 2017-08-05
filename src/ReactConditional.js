import React from 'react'
import PropTypes from 'prop-types'

function render (props) {
  if (typeof props.children === 'function') {
    return props.children()
  }

  return props.children || null
}

export function If (props) {
  if (props.condition) {
   return render(props)
  }
}

export function Else (props) {
  return render(props)
}

If.propTypes = Else.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

export function Conditional (props) {
  const { children } = props

  if (children == null) {
    return null
  }

  let elem = [].concat(children).find(c => c.type.name === 'If' && c.props.condition)
  if (elem) {
    return elem
  } else {
    return [].concat(children).find(c => c.type.name === 'Else') || null
  }
}

const IfOrElse = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.instanceOf(If),
  PropTypes.instanceOf(Else)
])

Conditional.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(IfOrElse),
    IfOrElse
  ])
}

Conditional.If = If
Conditional.Else = Else

export default Conditional
