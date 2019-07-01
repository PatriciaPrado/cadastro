import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../configuracoes/config';

export default class listaClientes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listaCliente: []
    }

  }

  carregar() {
    db.ref('/clientes').once('value').then(snapshot => {
      this.setState({ listaCliente: snapshot.val() });
    });
    alert('Carregando os clientes...');
  }


  render() {
    //Para habilitar navegação.
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1, backgroundColor: '#FF4D15', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 22 }}> Lista de Cliente </Text>
        </View>

        <TouchableOpacity onPress={() => this.carregar()} >
          <Text style={{ fontSize: 18, padding: 20, alignSelf: 'center', fontWeight: 'bold' }}> - Clique aqui para Atualizar - </Text>
        </TouchableOpacity>

        <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, paddingTop: 10 }}>
          <ScrollView style={{ width: '100%' }} >

            {Object.keys(this.state.listaCliente).map(i =>
              <TouchableOpacity onPress={() => navigate('Editar', {id: [i], nome: this.state.listaCliente[i].nome, cidade: this.state.listaCliente[i].cidade })}>
                <View style={{ backgroundColor: '#FF8A18', borderRadius: 5, padding: 10, marginVertical: 3, alignItems: 'stretch' }}>
                  <Text>Código: {[i]}</Text>
                  <Text>Nome: {this.state.listaCliente[i].nome} </Text>
                  <Text>Cidade: {this.state.listaCliente[i].cidade} </Text>
                </View>
              </TouchableOpacity>
            )}

          </ScrollView>
        </View>

        <View style={{ justifyContent: 'center' }}>

          <TouchableOpacity onPress={() => navigate('Novo')} >
            <View style={{ backgroundColor: '#FF4D15', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 18, padding: 20 }}>Novo</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

