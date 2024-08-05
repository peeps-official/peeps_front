// common/ui/badge.js
import React from 'react'
import PropTypes from 'prop-types'

export const Badge = ({ children, variant }) => {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium'
  const variantClasses =
    variant === 'success' ? 'bg-green-100 text-green-800' : ''

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>
}

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
}

Badge.defaultProps = {
  variant: '',
}
