import React from 'react'
//import './AddButton.css'
import PropTypes from 'prop-types'

function AddButton(props) {
  const { tag, className, children, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['AddButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

export default AddButton