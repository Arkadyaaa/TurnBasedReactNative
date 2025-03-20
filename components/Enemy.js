import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Enemy = ({ name, maxHp, sprite, hp, onDefeat }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image source={sprite} style={styles.sprite} />
      <Text style={styles.hp}>HP: {hp} / {maxHp}</Text>
      {/* <View style={styles.moveContainer}>
        {moves.map((move, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.moveButton} 
            onPress={() => takeDamage(move.damage)}
          >
            <Text style={styles.moveText}>{move.name} ({move.damage} dmg)</Text>
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
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
  moveContainer: {
    marginTop: 10,
  },
  moveButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  moveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Enemy;
