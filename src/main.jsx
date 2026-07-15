import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.jsx'
import RootProviders from "@app/providers/RootProviders.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RootProviders>
          <App />
      </RootProviders>
  </StrictMode>,
)
