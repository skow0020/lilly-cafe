import { useEffect, useState } from "react"
import netlifyAuth from "../netlifyAuth.js"

const Auth: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    const [user, setUser] = useState(null)

    useEffect(() => {
        netlifyAuth.initialize((user) => {
            setLoggedIn(!!user)
            setUser(user)
        })
    }, [loggedIn])

    const login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user)
            setUser(user)
            netlifyAuth.closeModal()
            window.location.reload()
        })
    }

    const logout = () => {
        netlifyAuth.signout(() => {
            setLoggedIn(false)
            setUser(null)
        })
    }

    return (
        <div>
            {loggedIn ? (
                <div>
                    You are logged in!

                    <br />
                    <button onClick={logout}>
                        Log out
                    </button>
                    {user && <>Welcome {user?.user_metadata.full_name}!</>}
                </div>
            ) : (
                    <button onClick={login}>
                        Log in
                    </button>
                )}
        </div>
    )
}

export default Auth