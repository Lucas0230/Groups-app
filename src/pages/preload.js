
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, ActivityIndicator, Image } from "react-native";


import AsyncStorage from '@react-native-community/async-storage';
import { Api } from "../Api";

export default function First({ }) {

    const navigation = useNavigation();

    useEffect(() => {

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                return navigation.navigate('Login');
            }

            const { name, email, choices, phone } = await Api.checkToken(token);

            if (name && email && choices && phone) {
                navigation.navigate('Groups')
            }
        }

        checkToken();
    }, [])

    return (

        <>

            <View style={styles.container}>
                <Image source={require('../../assets/img/logo-icon.png')} style={{ width: 160, height: 160, marginBottom: 50 }}></Image>
                <ActivityIndicator size="large" color="#FFFFFF" />
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
});
