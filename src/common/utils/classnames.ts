// Adding type definitions for arguments and return types
type Argument = string | Record<string, any> | Argument[]

// Ensures we maintain type information for the hasOwn function
const hasOwn: (v: PropertyKey) => boolean = {}.hasOwnProperty

export default function classNames(...args: Argument[]): string {
  let classes = ''

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

function parseValue(arg: Argument): string {
  if (typeof arg === 'string') {
    return arg
  }

  if (typeof arg !== 'object' || arg === null) {
    return ''
  }

  if (Array.isArray(arg)) {
    // Using spread operator to pass array elements as individual arguments
    return classNames(...arg)
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString()
  }

  let classes = ''

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function appendClass(value: string, newClass: string): string {
  if (!newClass) {
    return value
  }

  return value ? `${value} ${newClass}` : newClass
}
