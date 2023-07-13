import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from '@features/modal'
import { PhotoProvider } from '@features/share'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider.ModalProvider>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Provider.ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
