
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import Input from '../components/input'
import Button from '../components/button'
import SearchInput from '../components/searchInput'
import GroupsBox from '../components/groupsBox'

import { Api } from "../Api";

export default function First() {

  const navigation = useNavigation();

  function navigateToChat(params) {
    navigation.navigate("Chat", params);
  }

  const [search, setSearch] = useState('name')

  const [listGroups, setListGroups] = useState([]);

  async function getGroups() {
    const { response } = await Api.getGroups();
    setListGroups(response);
  }


  async function searchGroups(name) {

    if (search == 'tag') {
      const { response } = await Api.getGroups(false, false, name);
      return setListGroups(response);
    }

    if (search == 'name') {
      const { response } = await Api.getGroups(false, name);
      return setListGroups(response);
    }
  }

  useEffect(() => {
    getGroups();
  }, []);


  return (

    <>

      <View style={styles.container}>
        <View style={styles.headline}>
          <Text style={styles.title}>Pesquisar Grupos</Text>
        </View>
        <View style={styles.main}>

          <View style={styles.row}>

            <TouchableOpacity onPress={() => { setSearch('name') }} style={search == 'name' ? styles.button : styles.borderButton}>
              <Text>Por Nome</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setSearch('tag') }} style={search == 'tag' ? styles.button : styles.borderButton}>
              <Text>Por Tag</Text>
            </TouchableOpacity>

          </View>

          <SearchInput onChangeText={(t) => { searchGroups(t) }}></SearchInput>

          {
            listGroups.map((element) => {
              return (
                <GroupsBox onPress={() => { navigateToChat({ _id: element._id }) }} title={element.name} icon={element.avatar}></GroupsBox>
              )
            })
          }

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
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'red'
  },
  borderButton: {
    justifyContent: 'center',
    padding: '10px',
    borderColor: '#9adcb9',
    borderWidth: '3px',
    borderRadius: '20px',
    width: '150px',
    marginRight: 10,
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#9adcb9',
    borderRadius: '20px',
    width: '150px',
    marginRight: 10,
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: 600,
    fontFamily: 'Voltaire_400Regular'
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
    flex: 3,
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
