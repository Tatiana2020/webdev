import { useState } from "react"

export const SignInForm = ({onSignIn}) => {
    const [showSignInForm, setShowSignInForm] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const updateField = (setter) => e => setter(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (userName === 'admin' && password === 'password') {
            onSignIn ({userName: userName})
            setUserName ('')
            setPassword ('')
        }
    }

    /*const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }*/

    return (
        <div className="sign-in">
            <button onClick={() => setShowSignInForm(!showSignInForm)}>
                Sign In
            </button>

            {showSignInForm && 
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={updateField(setUserName)}></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" value={password} onChange={updateField(setPassword)}></input>
                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    )
}