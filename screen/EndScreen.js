import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const EndScreen = ({ navigation }) => {

  return (
    <ImageBackground 
      source={require('../assets/EndScreen.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Game')}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('CharacterSelect')}
          >
            <Text style={styles.buttonText}>Character Select</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('MainMenu')}
          >
            <Text style={styles.buttonText}>Main Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f400',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 150,
    borderRadius: 5,
    backgroundColor: '#00000080',
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#00000080',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default EndScreen;
