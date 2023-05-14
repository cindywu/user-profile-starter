import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initalSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
