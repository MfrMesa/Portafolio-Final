import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import { Analytics } from "@vercel/analytics/react"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics>
      <Root />
    </Analytics>
  </React.StrictMode>,
)