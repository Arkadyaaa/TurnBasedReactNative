const enemyData = [
    {
      id: 1,
      name: 'Villager',
      maxHp: 30,
      sprite: require('../assets/Villager.png'),
      moves: [
        { name: 'Pipe', damage: 15 },
        { name: 'Pipe', damage: 15 },
        { name: 'Bite', damage: 10 }
      ]
    },
    {
      id: 2,
      name: 'Infantry',
      maxHp: 50,
      sprite: require('../assets/Infantry.png'),
      moves: [
        { name: 'Punch', damage: 10 },
        { name: 'Shoot', damage: 15 }
      ]
    },
    {
      id: 3,
      name: 'EliteTrooper',
      maxHp: 70,
      sprite: require('../assets/EliteTrooper.png'),
      moves: [
        { name: 'Shoot', damage: 20 },
        { name: 'Shield Bash', damage: 15 },
        { name: 'Rifle Bayonet', damage: 15 }
      ]
    },
    {
      id: 3,
      name: 'Final Boss - Kaiser',
      maxHp: 90,
      sprite: require('../assets/Kaiser.png'),
      moves: [
        { name: 'Leg Sweep', damage: 10 },
        { name: 'Slash', damage: 15 },
        { name: '(Spell) Hurting', damage: 25 }
      ]
    }
  ];
  
  export default enemyData;