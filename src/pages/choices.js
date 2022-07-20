
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import OutlineButton from '../components/outlineButton'
import Box from '../components/box'

import { API } from '@env'
import { Api } from "../Api";

export default function First({ route }) {

  const navigation = useNavigation();

  const [choices, setChoices] = useState([]);

  function choose(item) {

    choices.forEach((choice, index) => {
      if (choice == item) {
        return choices.splice(index, 1);
      }
    }).then(() => {
      setChoices(choices => [...choices, item])
    })

  }

  async function register() {

    let { dados } = route.params;
    dados.choices = choices;

    const { ok } = await Api.signUp(dados);

    if (ok) {
      navigation.navigate("Login");
    }

  }

  return (

    <>

      <View style={styles.container}>
        <View style={styles.headline}>

          <Text style={{ fontSize: 28, fontFamily: 'Voltaire_400Regular', marginTop: 10, fontWeight: 600, marginBottom: 10 }}>Selecione seus gostos</Text>

          <OutlineButton onPress={() => { register() }} title="Próximo "></OutlineButton>
        </View>
        <View style={styles.main}>

          <View style={styles.row}>
            <Box onPress={() => { setChoices(choices => [...choices, 'Futebol']) }} title={'Futebol'}></Box>
            <Box onPress={() => { setChoices(choices => [...choices, 'Música']) }} title={'Música'}></Box>
          </View>
          <View style={styles.row}>
            <Box onPress={() => { setChoices(choices => [...choices, 'Arte']) }} title={'Arte'}></Box>
            <Box onPress={() => { setChoices(choices => [...choices, 'Futebol']) }} title={'Tecnologia'}></Box>
          </View>
          <View style={styles.row}>
            <Box onPress={() => { setChoices(choices => [...choices, 'Cinema']) }} title={'Cinema'}></Box>
            <Box onPress={() => { setChoices(choices => [...choices, 'Cinema']) }} title={'Livro'}></Box>
          </View>

        </View>
      </View>

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
    paddingTop: '40px',
    padding: 30,

  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  title: {
    width: '75%',
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: 22,
    fontFamily: 'Voltaire_400Regular'
  },
  button: {
    padding: '6px',
    borderRadius: '37px',
    backgroundColor: "#fffff",
    width: '40vw',
    borderColor: '#9adcb9',
    borderWidth: '2px',
    marginBottom: '15px',
    marginTop: '15px',
    textAlign: 'center',
    height: '40vw',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSelected: {
    padding: '6px',
    borderRadius: '37px',
    backgroundColor: "#9adcb9",
    borderColor: '#9adcb9',
    borderWidth: '2px',
    width: '40vw',
    marginBottom: '15px',
    marginTop: '15px',
    textAlign: 'center',
    height: '40vw',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
