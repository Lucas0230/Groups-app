import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';

export default function App({ title, style, onPress }) {

    const [styleBtn, setStyleBtn] = useState(styles.button)

    function choose() {
        if (styleBtn == styles.button) {
            setStyleBtn(styles.buttonSelected)
        } else {
            setStyleBtn(styles.button)
        }
    }

    return (
        <>
            <TouchableOpacity onPress={() => { onPress ? onPress() : ''; choose() }}
                style={styleBtn}
            >
                <Text style={{ fontSize: '22px', fontFamily: 'Voltaire_400Regular' }}>{title}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: '6px',
        borderRadius: '37px',
        backgroundColor: "#fffff",
        width: '40vw',
        borderColor: '#9adcb9',
        borderWidth: '2px',
        marginBottom: '15px',
        marginTop: '15px',
        textAlign: 'center',
        height: '40vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSelected: {
        padding: '6px',
        borderRadius: '37px',
        backgroundColor: "#9adcb9",
        borderColor: '#9adcb9',
        borderWidth: '2px',
        width: '40vw',
        marginBottom: '15px',
        marginTop: '15px',
        textAlign: 'center',
        height: '40vw',
        justifyContent: 'center',
        alignItems: 'center'
    }

});
