import { useEffect, useState } from "react"
import netlifyAuth from "../netlifyAuth.js"
import Button from "react-bootstrap/Button"

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
                    <Button onClick={logout} size="sm">
                        Log out
                    </Button>
                    {user && <>Welcome {user?.user_metadata.full_name}!</>}
                </div>
            ) : (
                    <Button onClick={login} size="sm">
                        Log in
                    </Button>
                )}
        </div>
    )
}

export default Auth