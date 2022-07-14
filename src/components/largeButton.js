import { StyleSheet, Text,TouchableOpacity, Image } from 'react-native';

export default function App({title, icon , onPress}) {
  return (
   <>
   <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Image  source={{uri: icon}} style={{width: 50, height: 50, marginRight: 20}} ></Image>
        <Text style={{fontSize: '22px'}}>{title}</Text>
      </TouchableOpacity>
   </>
  );
}

const styles = StyleSheet.create({
    button: {
        padding: '20px',
        borderRadius: 37,
        backgroundColor:"#5ac7aa",
        width: '100%',
        height: 100,
        marginBottom: '20px',
        marginTop: 0,
        textAlign: 'center',
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Voltaire_400Regular'
    },
    
});
