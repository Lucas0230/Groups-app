
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import Input from '../components/input'
import Button from '../components/button'
import Alerts from '../components/alerts'

import { API } from '@env';

export default function First() {

  const [error, setError] = useState(false);

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  function next() {
    navigation.navigate("Groups");
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {

    if (!email || !password) {
      return
    }

    let user = { email, password };

    const { status, ok } = await fetch(API + '/auth', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (status == 200 && ok) {
      next()
    }

  }

  return (

    <>

      <View style={styles.container}>
        <View style={styles.headline}>

          <Image source={require('../../assets/img/logo.png')} style={{ width: 160, height: 160 }} />

        </View>
        <View style={styles.main}>

          <Input onChange={() => { setEmail(event.target.value) }} title='Email:' placeholder="Digite seu usuário"></Input>
          <Input secureTextEntry={true} onChange={() => { setPassword(event.target.value) }} title='Senha:' placeholder="Digite sua senha"></Input>

          <View style={styles.google}>
            <Text style={{ fontSize: 15 }}>Conecte com o google</Text>
          </View>

          <Button onPress={() => { login() }} title='Próximo'></Button>


          <View style={styles.footer}>
            <View style={styles.row}>
              <Text style={{ fontSize: 12, marginTop: 5 }}>Esqueceu a senha?</Text>
              <Text onPress={() => { navigateToRegister() }} style={{ fontSize: 12, marginTop: 5 }}>Criar uma nova conta</Text>
            </View>
          </View>

        </View>
      </View>

      <Alerts state={error}></Alerts>

    </>

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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
