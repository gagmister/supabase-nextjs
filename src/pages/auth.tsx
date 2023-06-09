import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/Account'
const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

return (

    <div className="container" style={{ padding: '10px 0 0 0' }}>
        
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" providers={['google', 'apple', 'azure', 'linkedin']} />
      ) : (
        <Account session={session} />
      )}

    </div>
  )
}

export default Home
