import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useGame } from '../context/GameContext';
import CharacterList from '../components/CharacterList';

const CharacterSelect = ({ navigation }) => {
  const { setCharacter } = useGame();

  return (
    
    <ImageBackground 
      source={require('../assets/CharSelect.png')}
      style={styles.background}
    >

      <View style={styles.container}>
        <Text style={styles.title}>Select Your Character</Text>
        {CharacterList.map((char, index) => (
          <TouchableOpacity
            key={index}
            style={styles.characterButton}
            onPress={() => {
              setCharacter(char);
              navigation.navigate('Game');
            }}
          >
            <Image source={char.thumbnail} style={styles.characterThumbnail} />
            <Text style={styles.characterName}>{char.name}</Text>
            <Text style={styles.characterSub}>{char.subname}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#00000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  characterButton: {
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#00000060',
  },
  characterThumbnail: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  characterSub: {
    fontSize: 14,
    color: 'white',
  },
});

export default CharacterSelect;
