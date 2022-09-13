

import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import Button from '../components/button'

import { API } from '@env'

import { UserContext } from "../contexts/UserContext";


export default function First({ navigation }) {
  // const navigation = useNavigation();

  function navigateToRegisterChoices() {
    navigation.navigate("Choices");
  }

  const { state: user } = useContext(UserContext);


  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const [tags, setTags] = useState([]);

  const [users, setUsers] = useState([user._id])

  const [inputTags, setInputTags] = useState('');

  function addTag() {
    setTags(tags => [...tags, inputTags])
    setInputTags('');
  }

  async function createGroup() {

    let dados = {
      name, description, tags, users
    }

    const { ok } = await fetch(API + '/groups', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (ok) {
      navigation.navigate("Search");
    }

  }

  return (
    <>

      <View style={styles.container}>
        <View style={styles.headline}>

          <Text style={{ fontSize: 34, marginTop: 10, marginBottom: 20, fontWeight: 600, fontFamily: 'Voltaire_400Regular' }}>Criar Grupo</Text>
          <TouchableOpacity style={styles.imagePicker}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png' }} style={{ width: 70, height: 70 }} />
          </TouchableOpacity>


        </View>
        <View style={styles.main}>
          <Input onChangeText={(t) => { setName(t) }} title='Nome:' placeholder="Digite o nome do grupo"></Input>
          <Input onChangeText={(t) => { setDescription(t) }} title='Descrição:' placeholder="Digite a descrição do grupo"></Input>

          <View style={styles.tagsContainer}>

            <View style={styles.tagsTextContainer}>
              <View style={styles.title}>Tags</View>
              <TextInput
                onChange={() => { setInputTags(event.target.value) }}
                value={inputTags}
                style={styles.inputTag}
                placeholder='Digite suas tags'
              />
            </View>

            <View style={styles.tagsAddContainer}>
              <TouchableOpacity onPress={() => { addTag() }}>
                <View style={styles.add}>+</View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.tags}>
            {
              tags.map((tag) => {
                return (
                  <View style={styles.itemContainer}>
                    <Text style={styles.item}>{tag}</Text>
                  </View>)
              })
            }
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => { createGroup() }}
          >
            <Text style={{ fontSize: '26px', fontFamily: 'Voltaire_400Regular' }}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: "#9adcb9",
    maxHeight: 40,
    borderRadius: '15px',
    marginLeft: 5
  },
  button: {
    padding: '6px',
    borderRadius: '20px',
    backgroundColor: "#9adcb9",
    width: '60%',
    marginBottom: '15px',
    marginTop: '15px',
    textAlign: 'center',
    fontFamily: 'Voltaire_400Regular'
  },
  tags: {
    height: 180,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
  },
  tagsTextContainer: {
    flex: 9,
  },
  tagsAddContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 17
  },
  tagsContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'end',
  },
  add: {
    backgroundColor: '#9adcb9',
    width: 43,
    height: 43,
    borderRadius: 50,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
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
  inputTag: {
    padding: '10px',
    borderColor: '#9adcb9',
    borderWidth: '3px',
    borderRadius: '20px',
    width: '95%',
    marginBottom: '15px',
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
  main: {
    flex: 2,
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
    marginLeft: 10,
    fontFamily: 'Voltaire_400Regular'
  },
  input: {
    padding: '10px',
    borderColor: '#9adcb9',
    borderWidth: '3px',
    borderRadius: '20px',
    width: '80%',
    marginBottom: '15px',
    height: 50,
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
