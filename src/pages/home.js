
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import OutlineButton from '../components/outlineButton'
import Box from '../components/box'
import LargeButton from '../components/largeButton'

export default function First() {

  const navigation = useNavigation();

  function navigateToChoices() {
    navigation.navigate("Choices");
  }
  function navigateToSearch() {
    navigation.navigate("Search");
  }

  return (
            
        <>     
                
                <View style={styles.container}>
      <View style={styles.headline}> 

        <Text  style={{fontSize: 28, marginTop: 10, fontWeight: 600, marginBottom: 10}}>Selecione seus gostos</Text> 

           <OutlineButton title="Próximo "></OutlineButton>
      </View>
      <View style={styles.main}>

            <LargeButton icon='https://cdn-icons-png.flaticon.com/512/1076/1076744.png' title='Pesquisar Grupos'></LargeButton>
            <LargeButton icon='https://cdn-icons-png.flaticon.com/512/149/149145.png' title='Criar Grupo'></LargeButton>

            <View style={styles.line}></View>

            <LargeButton onPress={()=>{navigateToSearch()}} icon='https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png' title='Seus grupos'></LargeButton>
        
      </View>
   </View>

        </>

  );
}




const styles = StyleSheet.create({
    line:{
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
    paddingTop:'40px',
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
