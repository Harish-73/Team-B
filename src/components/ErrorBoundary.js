import * as React from 'react'
import ReactDOM from 'react-dom'
import {ErrorBoundary} from 'react-error-boundary'


export default function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}z

function City({name}) {
    return <div>Hello, visit {name.toUpperCase()}</div>
}

function Country({capital}) {
    return <div>Hello, visit {capital.toUpperCase()}</div>
}



