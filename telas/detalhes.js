import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { db } from '../configuracoes/config';


export default class novoCliente extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.navigation.state.params.id,
      nome: this.props.navigation.state.params.nome,
      cidade: this.props.navigation.state.params.cidade,     
    }

  }

  atualizar(){
    db.ref().child('clientes/' + this.state.id).set({
      name: this.state.nome,
      cidade: this.state.cidade,      
    });
    alert('Dados atualizados com sucesso!')
  }

  excluir(){
    Alert.alert(
      'Excluir',
      'Tem certeza que deseja excluir este usuário?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
        },
        {
          text: 'Confirmar',
          onPress: () => {
            db.ref().child('clientes/' + this.state.id).remove()
            this.props.navigation.navigate('ClientesLista');
        }}
      ]
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>

<View style={{flex: 1, backgroundColor: '#FF4D15', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 22}}>Dados do Cliente</Text> 
        </View>

        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text>ID: {this.state.id}</Text>

          <TextInput placeholder='Digite o nome' style={{ padding: 15, fontSize: 18, marginTop:30}}
          onChangeText={(texto) => this.setState({nome: texto})} value={this.state.nome} />

          <TextInput placeholder='Digite a cidade' style={{ padding: 15, fontSize: 18, marginTop:30}}
                    onChangeText={(texto) => this.setState({cidade: texto})} value={this.state.cidade} />

        </View>

        <View style={{justifyContent: 'center'}}>
          
          <TouchableOpacity onPress={ () => this.atualizar()}>
            <View style={{backgroundColor: '#FF4D15', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 18, padding: 20}}>Atualizar</Text>
            </View>
          </TouchableOpacity> 


          <TouchableOpacity onPress={() => this.excluir()}>
            <View style={{backgroundColor: '#cc0e53', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 18, padding: 20}}>Excluír</Text>
            </View>
          </TouchableOpacity> 
        </View>   

      </View>
    );
  }
}