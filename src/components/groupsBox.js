import { StyleSheet, Text, Image,  View, TextInput, TouchableOpacity } from 'react-native';

export default function App({title, icon}) {
  return (
   <>
        <TouchableOpacity style={styles.button}>

           <Image style={styles.icon} source={{uri: icon}}></Image>
            <Text>{title}</Text>
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
    title: {
        width: '75%',
        textAlign: 'left',
        marginBottom: '5px',
        fontSize: 22,
        fontWeight: 500
    },  
    button: {
        padding: '10px',
        borderColor: '#9adcb9',
        borderWidth: '3px',
        borderRadius: '20px',
        width: '80%',
        marginBottom: '15px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    
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
    width: '100%'
  },
  main: {
    flex: 2,
    width: '100%',
    borderTopEndRadius: '37px',
    borderTopStartRadius: '37px',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#000000',
    marginRight: 20
  }
});
