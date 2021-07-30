import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import Colors from "../utils/Colors";
import {Picker} from '@react-native-picker/picker';

export default function Form(props){
    const {setCapital, setInterest, setMes} = props;
    return(
        <View style = {styles.viewForm}>
            <View style = {styles.viewInputs}>
               <TextInput 
                   placeholder = "Cantidad a pedir"
                   keyboardType = "numeric"
                   style = {styles.input}
                   onChange = {(e) => setCapital(e.nativeEvent.text)}/>
               <TextInput
                   placeholder = "Intéres %"
                   keyboardType = "numeric"
                   style= {[styles.input, styles.inputPercentage]}
                   onChange = {(e) => setInterest(e.nativeEvent.text)}/>
            </View>

            <View style = {pickerSelectStyles.inputAndroid}>
            <Picker
                selectedValue = {setMes} //no muestra la opcion seleccionada
                //onValueChange = {setMes}>
                  onValueChange={(itemValue, itemIndex) => setMes(itemValue)}>
                  <Picker.Item label="Seleccione una opción..." color="#ee7c4b"/>
                  <Picker.Item label="3 meses" value="3"/>
                  <Picker.Item label="6 meses" value="6"/>
                  <Picker.Item label="12 meses" value="12"/>
                  <Picker.Item label="24 meses" value="24"/>
            </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 15,
        width: '85%',
        paddingHorizontal: 35,
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
      },
      viewInputs: {
        flexDirection: 'row',
      },
      input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.PRIMARY_COLOR_LIGHT,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
      },
      inputPercentage: {
        marginLeft: 5,
      }
    });

const pickerSelectStyles = StyleSheet.create({
     inputAndroid:{
        borderWidth: 1,
        borderColor: Colors.PRIMARY_COLOR_LIGHT,
        borderRadius: 8,
        backgroundColor: '#fff'  
      } 
});