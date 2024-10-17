import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateBestFuel = () => {
    const alcohol = parseFloat(alcoholPrice);
    const gasoline = parseFloat(gasolinePrice);

    if (!isNaN(alcohol) && !isNaN(gasoline) && gasoline > 0) {
      const ratio = alcohol / gasoline;
      if (ratio < 0.7) {
        setResult('Abasteça com Álcool');
      } else {
        setResult('Abasteça com Gasolina');
      }
    } else {
      setResult('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Combustível</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$/L)"
        keyboardType="numeric"
        value={alcoholPrice}
        onChangeText={setAlcoholPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$/L)"
        keyboardType="numeric"
        value={gasolinePrice}
        onChangeText={setGasolinePrice}
      />
      <Button title="Calcular" onPress={calculateBestFuel} />
      {result ? (
        <View style={styles.result}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
});

export default App;
