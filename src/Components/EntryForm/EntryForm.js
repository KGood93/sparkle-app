import React from 'react';
import './EntryForm.css';
//import PropTypes from 'prop-types';

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