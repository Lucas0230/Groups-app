

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import Button from '../components/button'

export default function First({ navigation }) {
  // const navigation = useNavigation();

  function navigateToRegisterChoices() {
    navigation.navigate("Choices");
  }

  return (

    <View style={styles.container}>
      <View style={styles.headline}>

        <Text style={{ fontSize: 34, marginTop: 10, marginBottom: 20, fontWeight: 600, fontFamily: 'Voltaire_400Regular' }}>Criar Grupo</Text>
        <TouchableOpacity style={styles.imagePicker}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png' }} style={{ width: 70, height: 70 }} />
        </TouchableOpacity>


      </View>
      <View style={styles.main}>
        <Input title='Nome:' placeholder="Digite o nome do grupo"></Input>
        <View style={styles.title}>Descrição do grupo:</View>
        <TextInput
          style={styles.input}

        />
        <Input title='Nome:' placeholder="Digite o nome do grupo"></Input>


        <Button onPress={() => { navigateToRegisterChoices() }} title='Próximo >'></Button>
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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 1.7,
    width: '100%',
    borderTopEndRadius: '37px',
    borderTopStartRadius: '37px',
    backgroundColor: '#ffff',
    alignItems: 'center',
    paddingTop: '40px',
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
    height: 100,
  },

  imagePicker: {
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    width: 140,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
});
