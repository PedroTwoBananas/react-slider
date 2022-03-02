import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Lobster';
}
`

render(
   <React.StrictMode>
      <Global />
      <App />
   </React.StrictMode>,
   document.getElementById('root')
)
