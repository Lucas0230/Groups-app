
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

import socketClient from "socket.io-client";

import AsyncStorage from '@react-native-community/async-storage';
import { Api } from "../Api";

// const SERVER = "http://localhost:8080";
const SERVER = "http://172.21.167.35:8080";


export default function First({ }) {

    var socket = socketClient(SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });

    const navigation = useNavigation();

    useEffect(() => {

        const test = async () => {
            const teste = await fetch(SERVER + '/getChannels', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
            })
            console.log(teste)
        }

        test()

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                return navigation.navigate('Login');
            }

            const { name, email, choices, phone } = await Api.checkToken(token);

            if (name && email && choices && phone) {
                return navigation.navigate('Groups')
            }
            navigation.navigate('Login')
        }

        // checkToken();



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
