import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Colors from '../utils/Colors';

export default function Footer(props) {
    const {calculate} = props;
    return (
        <View
        style={styles.viewFooter}>
            <TouchableOpacity 
                style={styles.button}
                onPress={calculate}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Colors.PRIMARY_COLOR_DARK,
        alignItems: 'center',
        justifyContent: 'center'
        },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
        },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR,
        padding: 16,
        borderRadius: 20,
        width: '75%'
        }
});