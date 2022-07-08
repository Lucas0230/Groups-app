import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function App({title, onPress}) {
  return (
   <>
   <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{fontSize: '22px'}}>{title}</Text>
      </TouchableOpacity>
   </>
  );
}

const styles = StyleSheet.create({
    button: {
        padding: '6px',
        borderRadius: '20px',
        backgroundColor:"#9adcb9",
        width: '60%',
        marginBottom: '15px',
        marginTop: '15px',
        textAlign: 'center',
        
    },
    
});
