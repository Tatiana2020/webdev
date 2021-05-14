import { useState } from 'react'
import {Logo} from './Logo.js'
import { SignInForm } from './SignInForm.js'
import { UserSummary } from './UserSummary.js'

export const NavBar = () => {
  const [user, setUser] = useState (null)

  const handleSignOut = () => {
    setUser(null)
  }

  return (
    <nav>
      <Logo/>
      {user 
        ? <UserSummary user={user} onSignOut={handleSignOut}/> 
        : <SignInForm onSignIn={setUser}/>}
    </nav>
  )
}