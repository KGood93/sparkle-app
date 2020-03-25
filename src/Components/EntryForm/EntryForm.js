import React from 'react';
import './EntryForm.css';

function EntryForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['entry-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

export default EntryForm;