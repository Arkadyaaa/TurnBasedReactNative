import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Modal } from 'react-native';
import { useGame } from '../context/GameContext';
import Character from '../components/Character';
import Enemy from '../components/Enemy';
import enemyData from '../components/EnemyList';

const Game = ({ navigation }) => {
  const { character } = useGame();
  const [playerHp, setPlayerHp] = useState(character?.maxHp);
  const [maxHp, setMaxHp] = useState(character?.maxHp);
  const [playerAbilities, setPlayerAbilities] = useState(character?.abilities.map((ability) => ({ ...ability })));
  const [currentEnemyIndex, setCurrentEnemyIndex] = useState(0);
  const [enemyHp, setEnemyHp] = useState(enemyData[0].maxHp);
  const [enemyMove, setEnemyMove] = useState('');
  const [turn, setTurn] = useState('player');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const backgrounds = [
    require('../assets/Outskirts.png'),
    require('../assets/MausoleumAlley.png'),
    require('../assets/WestStreets.png'),
    require('../assets/MoonTower.png')
  ];

  const [backgroundImage, setBackgroundImage] = useState(backgrounds[0]);

  useEffect(() => {
    setPlayerHp(character?.maxHp);
    setCurrentEnemyIndex(0);
    setEnemyHp(enemyData[0].maxHp);
    setPlayerAbilities(character?.abilities.map((ability) => ({ ...ability })));
  }, [character]);

  useEffect(() => {
    if (turn === 'enemy') {
      setTimeout(handleEnemyTurn, 1500);
    }
  }, [turn]);

  const showModal = (text) => {
    setModalText(text);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 1500);
  };

  const handlePlayerAttack = (damage) => {
    if (turn !== 'player') return;
    
    showModal(`Player attacked for ${damage} damage!`);
    
    setEnemyHp((prevHp) => {
      const newHp = Math.max(0, prevHp - damage);
      if (newHp === 0) {
        handleEnemyDefeat();
      } else {
        setTurn('enemy');
      }
      return newHp;
    });
  };

  const handleEnemyTurn = () => {
    if (playerHp <= 0) return;
    
    const move = enemyData[currentEnemyIndex].moves[Math.floor(Math.random() * enemyData[currentEnemyIndex].moves.length)];
    setEnemyMove(move.name);
    
    showModal(`Enemy used ${move.name} for ${move.damage} damage!`);
    
    setPlayerHp((prevHp) => {
      const newHp = Math.max(0, prevHp - move.damage);
      if (newHp === 0) {
        setTimeout(() => navigation.navigate('EndScreen'), 500);
      }
      return newHp;
    });
    
    setTimeout(() => setTurn('player'), 1500);
  };

  const handleEnemyDefeat = () => {
    if (currentEnemyIndex + 1 < enemyData.length) {
      setTimeout(() => setCurrentEnemyIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setEnemyHp(enemyData[newIndex].maxHp);
        setBackgroundImage(backgrounds[newIndex]);
        return newIndex;
      }), 2000);
      setMaxHp((prevMaxHp) => prevMaxHp + 5);
      setPlayerHp(maxHp + 5);

      setPlayerAbilities((prevAbilities) =>
        prevAbilities.map((ability) => ({
          ...ability,
          damage: ability.damage + 5,
        }))
      );
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    setPlayerAbilities(character?.abilities.map((ability) => ({ ...ability }))); // Reset to base abilities
    navigation.navigate('EndScreen');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Enemy 
          name={enemyData[currentEnemyIndex].name} 
          maxHp={enemyData[currentEnemyIndex].maxHp} 
          hp={enemyHp} 
          sprite={enemyData[currentEnemyIndex].sprite} 
          onDefeat={handleEnemyDefeat}
        />
        <Text style={styles.moveText}>Enemy used: {enemyMove}</Text>
        <Character 
          name={character.name} 
          maxHp={maxHp} 
          currentHp={playerHp} 
          sprite={character.sprite} 
          abilities={playerAbilities}
          onAttack={handlePlayerAttack}
        />
        <Button title="End Game" onPress={resetGame} />
      </View>

      {/* Modal for attacks */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalText}</Text>
          </View>
        </View>
      </Modal>
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
  moveText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#00000080',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Game;
