
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import { UserContext } from "../contexts/UserContext";
import { Api } from "../Api";
import AsyncStorage from "@react-native-community/async-storage";

import Input from '../components/input'
import Button from '../components/button'
import Alerts from '../components/alerts'


export default function First() {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  function next() {
    navigation.navigate("Home");
  }
  const [error, setError] = useState(false)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {

    if (!email || !password) {
      return
    }

    const { token, _id, name } = await Api.signIn(email, password);

    if (!token || !_id || !name) return setError(true)

    if (token && _id && name) {
      await AsyncStorage.setItem('token', token);

      userDispatch({
        type: 'setId',
        payload: {
          _id: _id,
        }
      })
      userDispatch({
        type: 'setName',
        payload: {
          name: name
        }
      })

      next()
    }

  }

  return (

    <>

      <View style={styles.container}>
        <View style={styles.headline}>

          <Image source={require('../../assets/img/logo.png')} style={styles.img} />

        </View>
        <View style={styles.main}>

          <Input onChangeText={(t) => { setEmail(t) }} value={email} title='Email:' placeholder="Digite seu email:"></Input>
          <Input secureTextEntry={true} onChangeText={(t) => { setPassword(t) }} value={password} title='Senha:' placeholder="Digite sua senha"></Input>

          {/* <View style={styles.google}>
            <Text style={{ fontSize: 15 }}>Conecte com o google</Text>
          </View> */}

          <View style={error ? styles.errorContainer : styles.noErrorContainer}>
            <Text style={styles.error}>Email ou senha incorretos!</Text>
          </View>

          <Button onPress={() => { login() }} title='Próximo'></Button>

          <View style={styles.footer}>
            <View style={styles.row}>
              {/* <Text style={{ fontSize: 12, marginTop: 5 }}>Esqueceu a senha?</Text> */}
              <Text onPress={() => { navigateToRegister() }} style={{ fontSize: 12, marginTop: 5 }}>Criar uma nova conta</Text>
            </View>
          </View>

        </View>
      </View>

    </>

  );
}




const styles = StyleSheet.create({
  img: {
    width: '70vw',
    height: '70%'
  },
  error: {
    color: '#a80213',
  },
  noErrorContainer: {
    display: "none",
  },
  errorContainer: {
    display: "flex",
    // paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff9ea8',
    width: '80%',
  },
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
    justifyContent: 'center',
  },
  main: {
    flex: 0.7,
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
    width: '80%',
    marginTop: 20
  }
});
