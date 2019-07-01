import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {db} from '../configuracoes/config';

export default class cadastrar extends Component {

  constructor(props){
    super(props);

    this.state = {
      nome: '',
      cidade: ''
    }
  }

  cadastrar (){
    db.ref('/clientes').push({
      nome: this.state.nome,
      cidade: this.state.cidade,
    })
    alert('Cliente cadastrado com sucesso!')
  }
  
  render() {
    return (
      <View style={{flex: 1}}>

<View style={{flex: 1, backgroundColor: '#FF4D15', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 22}}>Cadastro de Cliente</Text> 
        </View>

        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput placeholder='Digite o nome' style={{ padding: 15, fontSize: 18, marginTop:30}} onChangeText={(texto) => this.setState({nome: texto})} value={this.state.nome} />

          <TextInput placeholder='Digite a cidade' style={{ padding: 15, fontSize: 18, marginTop:30}} onChangeText={(texto) => this.setState({cidade: texto})} value={this.state.cidade} />
        </View>

        <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'stretch'}}>
            <TouchableOpacity onPress = {() => this.cadastrar()} >
            <View style={{backgroundColor: '#FF4D15', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 18, padding: 20}}>Cadastrar</Text>
            </View>
          </TouchableOpacity> 
        </View>   

      </View>
    );
  }
}

