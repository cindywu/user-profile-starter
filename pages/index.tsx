import Hello from '../components/hello'
import Account from '../components/account'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()
  return (
    <div className={'w-screen p-4'}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
        />
      ) : (
        <div>
          hello world
          <Hello />
          <Account session={session} />
        </div>
      )}
    </div>
  )
}
