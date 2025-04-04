'use client'

import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ConfigProvider, App as AntApp } from 'antd'

const queryClient = new QueryClient()

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'rgb(var(--primary-color))',
            borderRadius: 6,
          },
        }}
      >
        <AntApp>
          {mounted ? children : null}
        </AntApp>
      </ConfigProvider>
    </QueryClientProvider>
  )
} 