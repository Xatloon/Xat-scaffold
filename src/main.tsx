import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/styles/base.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
else {
  console.error('No root element found | src/main.tsx')
  console.error('没有找到 root 元素 | src/main.tsx')
}
