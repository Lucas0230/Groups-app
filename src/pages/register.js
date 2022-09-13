
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, TouchableOpacity, Text, TextInput } from "react-native";

import { IMaskInput } from "react-imask";

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
  const [age, setAge] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  // const [cpf, setCpf] = useState()
  const [phone, setPhone] = useState()

  const proximo = () => {

    let newUser = { name, password, email, phone, age };

    navigateToRegisterTwo(newUser);

  }


  return (

    <View style={styles.container}>
      <View style={styles.headline}>

        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png' }} style={{ width: 120, height: 120 }} />

      </View>
      <View style={styles.main}>

        <View style={styles.title}>Nome:</View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(t) => { setName(t) }}
          placeholder="Digite seu nome"
        />


        <View style={styles.title}>Email:</View>
        <TextInput
          style={styles.input}
          onChangeText={(t) => { setEmail(t) }}
          value={email}
          placeholder="Digite seu email"
        />

        <View style={styles.title}>Senha:</View>
        <TextInput
          style={styles.input}
          onChangeText={(t) => { setPassword(t) }}
          secureTextEntry="true"
          value={password}
          placeholder="Digite sua senha"
        />

        <View style={styles.title}>Telefone:</View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          onChangeText={(t) => { setPhone(t) }} value={phone}
        />

        <View style={styles.title}>Idade:</View>
        <TextInput
          style={styles.input}
          onChangeText={() => { setAge(event.target.value) }}
          title='Idade:'
          placeholder="Digite sua idade"
        />


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
    flex: 0.9,
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
  },
  title: {
    width: '75%',
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: 22,
    fontFamily: 'Voltaire_400Regular'
  },
  input: {
    padding: '10px',
    borderColor: '#9adcb9',
    borderWidth: '3px',
    borderRadius: '20px',
    width: '80%',
    marginBottom: '15px',

  },
});
