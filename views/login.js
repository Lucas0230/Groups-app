import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Input from '../src/components/input'
import Button from '../src/components/button'

   
export default function App() {
  return (
    
    <View style={styles.container}>
    <View style={styles.headline}> 
        
    <Image source={require('../assets/img/logo.png')} style={{ width: 160, height: 160 }} />

    </View>
    <View style={styles.main}>
      <Input title='Usuário:' placeholder="Digite seu usuário"></Input>
      <Input title='Senha:' placeholder="Digite sua senha"></Input>

      <Text style={{fontSize: 28}}>ou</Text>

      <View style={styles.google}>
      <Text style={{fontSize: 15}}>Conecte com o google</Text>
      </View>

      <Button title='Próximo'></Button>

      
      <View style={styles.footer}>
        <Text style={{fontSize: 12}}>Esqueceu a senha?                Criar uma nova conta</Text>
        {/* <Text style={{fontSize: '12px'}}>Criar uma nova conta</Text> */}
      </View>

    </View>
 </View>

)}


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
