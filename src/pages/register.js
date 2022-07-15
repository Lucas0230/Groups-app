
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";


import Input from '../components/input'
import Button from '../components/button'

export default function First({ navigation }) {
  // const navigation = useNavigation();

  function navigateToRegisterTwo(dados) {
    navigation.navigate("RegisterTwo", {
      dados
    });
  }


  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [cpf, setCpf] = useState()
  const [phone, setPhone] = useState()

  const proximo = () => {

    let user = { name, password, email, cpf, phone };

    // for (let data of Object.keys(user)) {

    //   if (!user[data]) {
    //     return alert('Preencha todos os dados!')
    //   }

    // }

    navigateToRegisterTwo(user);

  }


  return (

    <View style={styles.container}>
      <View style={styles.headline}>

        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png' }} style={{ width: 90, height: 90 }} />

      </View>
      <View style={styles.main}>
        <Input onChange={() => { setName(event.target.value) }} title='Nome:' placeholder="Digite seu nome"></Input>
        <Input onChange={() => { setPassword(event.target.value) }} title='Senha:' placeholder="Digite sua senha"></Input>
        <Input onChange={() => { setEmail(event.target.value) }} title='Email:' placeholder="Digite sua email"></Input>
        <Input onChange={() => { setCpf(event.target.value) }} title='CPF:' placeholder="Digite sua CPF"></Input>
        <Input onChange={() => { setPhone(event.target.value) }} title='Telefone:' placeholder="Digite sua telefone"></Input>


        <Button onPress={() => { proximo() }} title='Próximo >'></Button>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ac7aa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headline: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 2,
    width: '100%',
    borderTopEndRadius: '37px',
    borderTopStartRadius: '37px',
    backgroundColor: '#ffff',
    alignItems: 'center',
    paddingTop: '40px',
  },
  google: {
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: '#eeeeee',
    width: '80%',
    marginTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
  },
  footer: {
    borderTopColor: '#000000',
    borderTopWidth: '1px',
    width: '80%'
  }
});
