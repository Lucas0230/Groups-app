import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default function App({ title, icon, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image style={styles.image} source={{ uri: icon }}></Image>
        <Text style={{ fontSize: 18 }}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '75%',
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: 22
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
    gap: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: '50%'
  }
});
