import React, { createContext, useState, } from 'react';

const estadoGlobalInicial = {
    usuario: null,
    username: () => {},
    logout: () => {}
}

export const UsuarioLogado = createContext(estadoGlobalInicial)

export const UsuarioLogadoProvider = ({children}) => {

    const [usuario, setUsuario] = useState(null)

    return(

        <UsuarioLogado.Provider 
        value={{
            usuario,
            username: (user) => {
                setUsuario(user)
            },
            logout: () => {
                setUsuario(null)
            }
        }}
        
        >
            {children}
            </UsuarioLogado.Provider>


    )

}