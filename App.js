import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  // Estado Inicial: Define três estados usando useState:
  // peso e altura para armazenar os valores de entrada do
  // usuário, e imc para armazenar o resultado do cálculo.
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState('');

  //Função que calcula o IMC
  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
    
  }

  return (
    <View style={styles.container}>
      {/* Imagem do app */}
      <Image
        source={require('./assets/icone_img.png')}
        style={styles.image}
      />
      {/* Titulo do Site */}
      <Text style={styles.title}>Calculadora de IMC</Text> 
      <TextInput
        style={styles.input}
        // Nome em cinza de "dentro" do text
        placeholder="Peso (kg)" 
        // Traz um teclado numérico para inserir o texto
        keyboardType="numeric" 
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {imc && (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
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
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    marginLeft: 105,
  }
});
