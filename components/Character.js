import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Character = ({ name, maxHp, currentHp, sprite, abilities, onAttack }) => {
  return (
    <View style={styles.container}>
      <Image source={sprite} style={styles.sprite} />
      <Text style={styles.hp}>HP: {currentHp} / {maxHp}</Text>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.abilityContainer}>
        {abilities.map((ability, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.abilityButton} 
            onPress={() => onAttack(ability.damage)}
          >
            <Text style={styles.abilityText}>{ability.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
  },
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#00000080',
    color: 'white',
  },
  sprite: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  hp: {
    fontSize: 16,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#00000080',
    color: 'white',
  },
  abilityContainer: {
    marginTop: 10,
  },
  abilityButton: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#FF696180',
    color: 'white',
    marginVertical: 5,
  },
  abilityText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Character;
