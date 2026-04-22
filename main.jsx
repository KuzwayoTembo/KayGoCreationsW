import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KaygoAudit from './KaygoAudit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KaygoAudit />
  </StrictMode>,
)
