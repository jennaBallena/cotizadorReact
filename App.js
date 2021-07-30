import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView,StatusBar, Button, ScrollView} from 'react-native';
import Colors from './src/utils/Colors';
import Form from './src/componets/Form';
import Footer from "./src/componets/Footer";
import Resultado from "./src/componets/Resultado";

export default function App (props){
  const [capital, setCapital ] = useState(null);
  const [interest, setInterest] = useState(null);
  const [mes, setMes] =  useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() =>{
    if(capital && interest && mes) calculate();
    else reset();
  }, [capital, interest, mes])

  const calculate = () => {
    reset();
    if(!capital){
      setErrorMessage("Añade la cantidad que quieras solicitar");
    }else if(!interest){
      setErrorMessage("Añade el interes que quieras solicitar");
    }else if(!mes){
      setErrorMessage("Seleccione los meses a pagar");
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);
      setTotal({
        mesFee: fee.toFixed(2),
        totalPagar: (fee * mes).toFixed(2)
      });
    }
  };

  const reset = () => {
    //setMes(null)
    setErrorMessage("");
    setTotal(null);
  }
  
  return(
    <>
    <StatusBar barStyle="light-content"/>
<View>
<ScrollView contentContainerStyle={styles.contentContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
          <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
          <Form 
            setCapital = {setCapital}
            setInterest = {setInterest}
            setMes = {setMes}/>
      </SafeAreaView>

      <Resultado
        errorMessage = {errorMessage}
        capital = {capital}
        interest = {interest}
        mes = {mes}
        total = {total}/>
</ScrollView>
</View>
      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: Colors.PRIMARY_COLOR_DARK,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 35,
  },
  contentContainer: {
    paddingBottom: 50
  }
}); 