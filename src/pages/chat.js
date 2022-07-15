
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import Input from '../components/input'
import Button from '../components/button'
import Alerts from '../components/alerts'

import { API } from '@env';

export default function First() {

    const [error, setError] = useState(false);

    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate("Register");
    }

    function next() {
        navigation.navigate("Groups");
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const login = async () => {

        if (!email || !password) {
            return
        }

        let user = { email, password };

        const { status, ok } = await fetch(API + '/auth', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        if (status == 200 && ok) {
            next()
        }

    }

    return (

        <>

            <View style={styles.headline}>

            </View>
            <View style={styles.container}>

            </View>


        </>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    headline: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000000',
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
        flex: 2,
        width: '100%',
        borderTopEndRadius: '37px',
        borderTopStartRadius: '37px',
        backgroundColor: '#ffff',
        alignItems: 'center',
        paddingTop: '40px',
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
