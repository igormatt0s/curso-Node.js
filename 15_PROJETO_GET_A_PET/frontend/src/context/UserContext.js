import {createContext} from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

// Provedor que vai dar o contexto para outras entidades
function UserProvider({children}) {
    const { authenticated, loading, register, login, logout } = useAuth();

    // acessar o método pelo contexto
    return (
        <Context.Provider value={{ loading, authenticated, register, login, logout }}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}