import React, { useContext } from 'react';
import { UsuarioLogado } from '../contexts/contextUsuario';
import RotaAutenticacao from '../navigation/RotaAutenticacao';
import TabNavigation from '../navigation/TabNavigation';

const AuthRoutes = () => {
    
    const { usuario, login } = useContext(UsuarioLogado);

    return (
        usuario ? <TabNavigation /> : <RotaAutenticacao />
    )

}

export default AuthRoutes