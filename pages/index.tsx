import Hello from '../components/hello'
import Account from '../components/account'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()
  return (
    <div className={'flex flex-row min-h-screen justify-center items-center'}>
      {!session ? (
        <div className={'w-96'}>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            theme='default'
          />
        </div>
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
