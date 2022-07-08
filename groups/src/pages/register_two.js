
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import Button from '../components/button'

export default function First({navigation, route}) {
  // const navigation = useNavigation();

  function navigateToRegisterChoices() {
    navigation.navigate("Choices");
  }

   const {name} =  route.params.dados;

  console.log(route.params)
  // console.log(name)

  return ( 

    <View style={styles.container}>
    <View style={styles.headline}> 

      <TouchableOpacity style={styles.imagePicker}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png'} } style={{ width:70, height:70 }} />
      </TouchableOpacity>   

      <Text  style={{fontSize: 24, marginTop: 10, fontWeight: 600}}>Adicione uma foto</Text>   

    </View>
    <View style={styles.main}>
      <Input title='Idade:' placeholder="Digite sua idade"></Input>
      <View  style={styles.title}>Conte sobre você:</View>
      <TextInput
              style={styles.input}
           
          />

      <Button onPress={()=>{navigateToRegisterChoices()}} title='Próximo >'></Button>
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
      flex: 2,
      width: '100%',
      borderTopEndRadius: '37px',
      borderTopStartRadius: '37px',
      backgroundColor: '#ffff',
      alignItems: 'center',
      paddingTop:'40px',
    },
    title: {
      width: '75%',
      textAlign: 'left',
      marginBottom: '5px',
      fontSize: 22
  },  
      input: {
          padding: '10px',
          borderColor: '#9adcb9',
          borderWidth: '3px',
          borderRadius: '20px',
          width: '80%',
          marginBottom: '15px',
          height: 200,
      },
     
     imagePicker : {
         backgroundColor: '#FFFFFF',
         borderRadius: '50%',
         width: 140,
         height: 140,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
     }
  });
  