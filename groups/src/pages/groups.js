
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {StyleSheet,  View, TouchableOpacity, Text, Image } from "react-native";

import Input from '../components/input'
import Button from '../components/button'
import SearchInput from '../components/searchInput'
import GroupsBox from '../components/groupsBox'

export default function First() {

  const navigation = useNavigation();

  function navigateToSecond() {
    navigation.navigate("Register");
  }
  

  return (
            
        <>     
                
        <View style={styles.container}>
            <View style={styles.headline}> 
                <Text  style={styles.title}>SEUS GRUPOS</Text>
            </View>
            <View style={styles.main}>

            <SearchInput></SearchInput>

            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
            <GroupsBox title='Grupo do Futebol' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/280px-Football_iu_1996.jpg'></GroupsBox>
           
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
    title: {
        fontSize: 27,
        fontWeight: 600,
        fontFamily: 'Voltaire_400Regular'

    },  
    headline: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    main: {
      flex: 5,
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
  