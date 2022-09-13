
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import OutlineButton from '../components/outlineButton'
import Box from '../components/box'
import LargeButton from '../components/largeButton'

export default function First() {

  const navigation = useNavigation();

  function navigateToCreateGroup() {
    navigation.navigate("Create");
  }
  function navigateToAllGroups() {
    navigation.navigate("Search");
  }
  function navigateToGroups() {
    navigation.navigate("Groups");
  }

  return (

    <>

      <View style={styles.container}>
        <View style={styles.headline}>

          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png' }} style={{ width: 160, height: 160, marginBottom: 40, marginTop: 20 }} />
          <Text style={{ fontSize: 45, marginTop: 10, fontWeight: 600, marginBottom: 10, }}>Página Inicial</Text>

          {/* <OutlineButton title="Próximo "></OutlineButton> */}
        </View>
        <View style={styles.main}>

          <LargeButton onPress={() => { navigateToAllGroups() }} icon='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' title='Pesquisar Grupos'></LargeButton>
          <LargeButton onPress={() => { navigateToCreateGroup() }} icon='https://www.freeiconspng.com/thumbs/plus-icon/plus-sign-icon-31.png' title='Criar Grupo'></LargeButton>

          <View style={styles.line}></View>

          <LargeButton onPress={() => { navigateToGroups() }} icon='https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png' title='Seus grupos'></LargeButton>

        </View>
      </View>

    </>

  );
}




const styles = StyleSheet.create({
  line: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 30,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#5ac7aa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headline: {
    flex: 2,
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
    fontSize: 22
  },

});
