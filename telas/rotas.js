import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Clientes from './listaclientes';
import Cadastrar from './cadastrar';
import Detalhes from './detalhes';

const AppStackNavigator = createStackNavigator({
    ClientesLista: Clientes,
    Novo: Cadastrar,
    Editar: Detalhes,   
});

const AppContainer = createAppContainer(AppStackNavigator);


export default class Rotas extends Component {
    render(){
        return <AppContainer />
    }
}

