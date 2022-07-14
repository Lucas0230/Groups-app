import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default function Alerts({ state }) {

    const [showAlert, setShowAlert] = useState();

    if (showAlert) {
        return (
            <View style={styles.container}>

                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="AwesomeAlert"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        setShowAlert(false)
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        );
    }

    if (!showAlert) {
        return <></>
    }


};

const styles = StyleSheet.create({
    container: {
        zIndex: '999999999999999',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    },
    text: {
        color: '#fff',
        fontSize: 15
    }
});