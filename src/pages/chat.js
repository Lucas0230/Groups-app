
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import Socket from "../Socket";

import { Api } from "../Api";

export default function First({ route }) {

    const groupId = route.params._id;

    const [chat, setChat] = useState([]);

    async function getChatConversations(groupId) {
        const { response } = await Api.getChatConversations(groupId);
        console.log(response)
        setChat(response.timeline);
    }

    // [
    //     {
    //         "message": "TESTE",
    //         "userId": false,
    //         "time": "2022-07-22T11:28:11.081Z"
    //     },
    //     {
    //         "message": "TESTE",
    //         "userId": false,
    //         "time": "2022-07-22T11:28:13.041Z"
    //     }
    // ]

    function renderMessage(item) {
        setChat(chat => [...chat, item])

    }

    useEffect(() => {

        Socket.connect();

        Socket.join({ room: groupId })

        Socket.newMessage(renderMessage)

        getChatConversations(groupId);

    }, [])


    const navigation = useNavigation();

    return (

        <>

            <View style={styles.headline}>

            </View>

            <TouchableOpacity onPress={() => {
                Socket.sendMessage({
                    message: 'MESNAGE',
                    userId: 'USERID',
                    time: 'TEMPO DE AGORA',
                    room: groupId
                })
            }}>
                TESTE
            </TouchableOpacity>

            <View style={styles.container}>

                {
                    chat.map((element) => {
                        if (!element.message) return
                        return (
                            <View style={styles.message}>
                                <Text style={styles.messageText}>{element.message}</Text>
                            </View>)
                    })
                }

                <View style={styles.message}>
                    <Text style={styles.messageText}>Teste de mesange do Groups</Text>
                </View>

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
    message: {
        padding: 10,
        marginTop: 4,
        backgroundColor: '#5ac7aa',
    },
    messageText: {
        fontSize: 20
    }
});
