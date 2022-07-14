import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App({ title, placeholder, onChange, secureTextEntry }) {

  return (
    <>
      <View style={styles.title}>{title}</View>
      <TextInput secureTextEntry={secureTextEntry ? secureTextEntry : false} onChange={onChange}
        style={styles.input}
        placeholder={placeholder}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
  }
});
