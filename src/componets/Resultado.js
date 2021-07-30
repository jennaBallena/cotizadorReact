import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import Colors from "../utils/Colors";

export default function Resultado(props) {
    const {capital, interest, mes, total,errorMessage} = props;

    return (
        <View style = {styles.container}>
            {total && (
                <View style = {styles.boxResultado}>
                    <Text style = {styles.titleResultado}>Resumen</Text>
                    <DataResult title = "Cantidad solicitada:" value = {`${capital} MXN`}/>
                    <DataResult title = "Intéres %:" value = {`${interest} %`}/>
                    <DataResult title = "Plazos solicitados:" value = {`${mes} meses`}/>
                    <DataResult title = "Pago mensual:" value = {`${total.mesFee} MXN`}/>
                    <DataResult title = "Total a pagar:" value = {`${total.totalPagar} MXN`}/>
                </View>
            )}
            <View>
                <Text style = {styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const {title, value} = props;
    return(
        <View style = {styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        textAlign: 'center',
        color: Colors.ERROR_MESSAGE,
        fontWeight: 'bold',
        fontSize: 16,
    },
    container:{
        marginHorizontal: 40,
    },
    boxResultado:{
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 0
    },
    titleResultado:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    value:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }

})