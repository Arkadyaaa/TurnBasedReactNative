const characterData = [
    {
      id: 1,
      name: 'Marcoh',
      subname: 'The Brawler',
      maxHp: 45,
      attack: 10,
      sprite: require('../assets/Battle_Marcoh.png'),
      thumbnail: require('../assets/Portrait_Marcoh.png'),
      abilities: [
        { name: 'Bare Fist', damage: 10 },
        { name: 'Leg Sweep', damage: 10 },
        { name: 'Barrage of Punches', damage: 10 }
      ]
    },
    {
      id: 2,
      name: 'Marina',
      subname: 'The Occultist',
      maxHp: 35,
      attack: 20,
      sprite: require('../assets/Battle_Marina.png'),
      thumbnail: require('../assets/Portrait_Marina.png'),
      abilities: [
        { name: 'Black Orb', damage: 20 },
        { name: 'Hurting', damage: 20 },
        { name: 'Pyromancy', damage: 20 }
      ]
    },
    {
      id: 3,
      name: 'Levi',
      subname: 'The Soldier',
      maxHp: 40,
      attack: 15,
      sprite: require('../assets/Battle_Levi.png'),
      thumbnail: require('../assets/Portrait_Levi.png'),
      abilities: [
        { name: 'Pistol', damage: 15 },
        { name: 'Rifle', damage: 15 },
        { name: 'Leg Sweep', damage: 15 }
      ]
    }
  ];
  
  export default characterData;
  