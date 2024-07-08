import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ProviderPokemon, ProviderModal } from './infra/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderPokemon>
      <ProviderModal>
        <App />
      </ProviderModal>
    </ProviderPokemon>
  </React.StrictMode>,
)
