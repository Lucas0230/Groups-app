import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function App({title}) {
  return (
   <>
   <TouchableOpacity
        style={styles.button}
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
        backgroundColor:"transparent",
        borderWidth: 1.5,
        borderColor: '#ffffff',
        width: '60%',
        marginBottom: '15px',
        marginTop: '15px',
        textAlign: 'center',
        
    },
    
});
