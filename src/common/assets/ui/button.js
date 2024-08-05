// common/ui/button.js
import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, className, size, variant, ...props }) => {
  const baseClasses = 'py-2 px-4 font-semibold rounded-lg'
  const sizeClasses = size === 'icon' ? 'p-2' : ''
  const variantClasses =
    variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500 text-white'

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  size: '',
  variant: '',
}
