import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Input from '../src/components/input'
import Button from '../src/components/button'

export default function App() {
  return (
   <View style={styles.container}>
      <View style={styles.headline}> 
          
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5014/5014872.png'} } style={{ width:90, height:90 }} />

      </View>
      <View style={styles.main}>
        <Input title='Nome:' placeholder="Digite seu nome"></Input>
        <Input title='Senha:' placeholder="Digite sua senha"></Input>
        <Input title='Email:' placeholder="Digite sua email"></Input>
        <Input title='CPF:' placeholder="Digite sua CPF"></Input>
        <Input title='Telefone:' placeholder="Digite sua telefone"></Input>


        <Button  title='Próximo >'></Button>
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
