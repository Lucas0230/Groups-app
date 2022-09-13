
import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Text, Image } from "react-native";

import Socket from "../Socket";

import { Api } from "../Api";

import { UserContext } from "../contexts/UserContext";

export default function First({ route }) {

    const navigation = useNavigation();

    function back() {
        navigation.navigate("Groups")
    }

    const { state: user } = useContext(UserContext);

    const groupId = route.params._id;

    const [chat, setChat] = useState([]);

    const [messageToSend, setMessageToSend] = useState([]);

    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();


    function sendMessage() {

        console.log(user)

        Socket.sendMessage({
            message: messageToSend,
            userId: user._id,
            name: user.name,
            time: new Date(),
            room: groupId
        })

        setMessageToSend('');
    }

    async function getChatConversations(groupId) {

        const { response } = await Api.getChatConversations(groupId);

        if (response.avatar) {
            setAvatar(response.avatar)
        }

        setName(response.name)
        setChat(response.timeline);
    }

    function renderMessage(item) {
        setChat(chat => [...chat, item])
    }

    useEffect(() => {

        Socket.connect();

        Socket.join({ room: groupId })

        Socket.newMessage(renderMessage)

        getChatConversations(groupId);

    }, [])

    const scrollViewRef = useRef();

    return (

        <>


            <View style={styles.container}>

                <View style={styles.header}>

                    <View style={styles.return}>
                        <TouchableOpacity onPress={() => { back() }}>
                            <Image style={styles.imageReturn} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/109/109618.png' }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleContainer} >
                        <Text style={styles.title}>{name}</Text>
                    </View>

                    <View style={styles.avatar}>
                        <Image style={styles.image} source={{ uri: avatar }}></Image>
                    </View>

                </View>

                <View style={styles.body}>

                    <ScrollView
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>

                        {
                            chat.map((element) => {

                                if (!element.message || !element.userId) return

                                if (element.userId && user._id == element.userId) {

                                    return (
                                        <View style={styles.myMessageContainer}>
                                            <Text style={styles.myMessage}>{element.message}</Text>
                                            <Text style={styles.myDate}>{new Date(element.time).toTimeString().slice(0, 5)}</Text>
                                        </View>)

                                } else {

                                    return (
                                        <View style={styles.messageContainer}>
                                            <Text style={styles.author}>{element.name ? element.name : ''}</Text>
                                            <Text style={styles.message}>{element.message}</Text>
                                            <Text style={styles.date}>{new Date(element.time).toTimeString().slice(0, 5)}</Text>
                                        </View>)
                                }
                            })
                        }

                    </ScrollView>
                </View>


                <View style={styles.footer}>

                    <TextInput
                        onChange={() => { setMessageToSend(event.target.value) }}
                        style={styles.input}
                        value={messageToSend}
                    />

                    <TouchableOpacity onPress={() => { sendMessage() }} style={styles.button}>
                        >
                    </TouchableOpacity>

                </View>
                {/* <View style={styles.message}>
                    <Text style={styles.messageText}>Teste de mesange do Groups</Text>
                </View> */}

            </View>


        </>

    );
}




const styles = StyleSheet.create({
    myDate: {
        fontSize: 10,
        textAlign: "right"
    },
    date: {
        fontSize: 10
    },
    author: {
        fontSize: 10
    },
    messageContainer: {
        padding: 10,
        marginVertical: 6,
        backgroundColor: '#9adcb9',
        width: 'auto',
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    myMessageContainer: {
        padding: 10,
        marginVertical: 6,
        backgroundColor: '#a1a1a1',
        width: 'auto',
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    myMessage: {
        fontSize: 16,
        fontFamily: 'Voltaire_400Regular'
    },
    message: {
        fontSize: 16,
        fontFamily: 'Voltaire_400Regular'
    },
    input: {
        borderRadius: 15,
        borderWidth: 4,
        borderColor: '#9adcb9',
        width: '90%',
        height: '80%',
        padding: 10,
        fontSize: 16
    },
    button: {
        backgroundColor: '#9adcb9',
        width: 56,
        height: 56,
        padding: 10,
        fontSize: 19,
        fontWeight: 900,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        backgroundColor: '#000000',
        flex: 1,
    },
    header: {
        backgroundColor: '#9adcb9',
        flex: 1,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageReturn: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },
    body: {
        backgroundColor: '#ffffff',
        flex: 8,
        padding: 20,
        maxHeight: '80vh'
    },
    footer: {
        backgroundColor: '#ffffff',
        flex: 0.8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    titleContainer: {
        flex: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        flex: 0.5
    },
    return: {
        flex: 0.5,
    },
    title: {
        textAlign: 'center',
        width: '100%',
        fontSize: 25,
        fontFamily: 'Voltaire_400Regular'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: '50%'
    }
});
