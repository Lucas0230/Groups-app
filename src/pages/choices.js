
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import Input from '../components/input'
import OutlineButton from '../components/outlineButton'
import Box from '../components/box'

export default function First({route}) {

  const [user, setUser] = useState(route.params.user)

  const navigation = useNavigation();

  function navigateToChoices() {
    navigation.navigate("Choices");
  }

  return (
            
        <>     
                
                <View style={styles.container}>
      <View style={styles.headline}> 

        <Text  style={{fontSize: 28, marginTop: 10, fontWeight: 600, marginBottom: 10}}>Selecione seus gostos</Text> 

           <OutlineButton title="Próximo "></OutlineButton>
      </View>
      <View style={styles.main}>

        <View style={styles.row}>
          <Box onPress={(e)=>{console.log(e.target.value)}} title={'Futebol'}></Box>
          <Box title={'Música'}></Box>
        </View>
        <View style={styles.row}>
          <Box title={'Arte'}></Box>
          <Box title={'Tecnologia'}></Box>
        </View>
        <View style={styles.row}>
          <Box title={'Cinema'}></Box>
          <Box title={'Livro'}></Box>
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
