import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [userEscolha, setUserEscolha] = useState('');
  const [appEscolha, setAppEscolha] = useState('');
  const [resultado, setResultado] = useState('');

  const Escolhas = ['Pedra', 'Papel', 'Tesoura'];

  const jogar = (userEscolha) => {
    const appEscolha = Escolhas[Math.floor(Math.random() * Escolhas.length)];
    setUserEscolha(userEscolha);
    setAppEscolha(appEscolha);
    determinarVencedor(userEscolha, appEscolha);
  };

  const determinarVencedor = (user, app) => {
    if (user === app) {
      setResultado('Empate!');
    } else if (
      (user === 'Pedra' && app === 'Tesoura') ||
      (user === 'Papel' && app === 'Pedra') ||
      (user === 'Tesoura' && app === 'Papel')
    ) {
      setResultado('Parabéns, você ganhou!');
    } else {
      setResultado('Poxa vida, você perdeu!');
    }
  };

  const jogarNovamente = () => {
    setUserEscolha('');
    setAppEscolha('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
       <Text style={styles.titlePrinc}>Pedra, Papel e Tesoura</Text>
      <Image
        source={require('./assets/icon_PedraPapelTesoura.png')}
        style={styles.image}
      />
     

      <Text style={styles.title}>Vamos Jogar?</Text>
      <Text style={styles.title}>Faça a sua escolha... </Text>

      <View style={styles.escolhasContainer}>
        {Escolhas.map((Escolhas) => (
          <Button key={Escolhas} title={Escolhas} onPress={() => jogar(Escolhas)} />
        ))}
      </View>
      {userEscolha ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.TextMinhaEscolha}>Você escolheu: {userEscolha}</Text>
          <Text style={styles.TextEscolhaApp} >Nós escolhemos: {appEscolha}</Text>
          <Text style={styles.TextResultado}>{resultado}</Text>
          <Button title="Jogar Novamente" onPress={jogarNovamente} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  titlePrinc: {
    fontSize: 30,
    marginBottom: 30,
    color: 'green'
  },
  TextMinhaEscolha: {
    fontSize: 20,
    color: 'orange',
    fontWeight: 'bold',
  },
  TextEscolhaApp: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  TextResultado: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  escolhasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  resultadoContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
