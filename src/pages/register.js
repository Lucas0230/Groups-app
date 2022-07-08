
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";


import Input from '../components/input'
import Button from '../components/button'
import { useState } from 'react';

export default function First({navigation}) {
  // const navigation = useNavigation();

  const [user, setUser] = useState({
    name: '',
    paswword: '',
    email: '',
    cpf: '',
    phone: '',
    age: '',
    about: ''
  })

 function navigateToRegisterTwo() {
    navigation.navigate("RegisterTwo", { 
      paramKey: 'Parâmetros da Primeira Tela', 
      user: user
    });
  }

  return ( 

        <View style={styles.container}>
            <View style={styles.headline}> 
                
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png'} } style={{ width:90, height:90 }} />

            </View>
            <View style={styles.main}>

                <Input onChange={(e)=>{setUser({ ...user, name: e.target.value})}} title='Nome:' placeholder="Digite seu nome"></Input>
                <Input onChange={(e)=>{setUser({ ...user, password: e.target.value})}} title='Senha:' placeholder="Digite sua senha"></Input>
                <Input onChange={(e)=>{setUser({ ...user, email: e.target.value})}} title='Email:' placeholder="Digite sua email"></Input>
                <Input onChange={(e)=>{setUser({ ...user, cpf: e.target.value})}} title='CPF:' placeholder="Digite sua CPF"></Input>
                <Input onChange={(e)=>{setUser({ ...user, phone: e.target.value})}} title='Telefone:' placeholder="Digite sua telefone"></Input>


                <Button onPress={()=>{navigateToRegisterTwo()}}  title='Próximo >'></Button>
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
    paddingTop:'40px',
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
