const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonLoss = () => { 
  const maxDamage = dragon.strength;
  const minDamage = 15;

  return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}

const warriorLoss = () => {
  const minDamage = warrior.strength;
  const maxDamage = minDamage * warrior.weaponDmg;

  return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}

const manaUse = () => mage.mana < 15 ? 'Não possui mana suficiente' : 15;

const mageLoss = () => {
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;

  const usage = {
    damage: Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage,
    mana: manaUse()
  }

  return usage;
}

const gameActions = {
  warriorTurn: (callback) => {
    const damage = callback();

    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },

  mageTurn: (callback) => {
    const usage = callback();

    mage.damage = usage.damage;
    typeof usage.mana !== 'number' ? mage.mana = usage.mana : mage.mana -= usage.mana;
    dragon.healthPoints -= usage.damage;
  },

  dragonTurn: (callback) => {
    const damage = callback();

    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },

  completeTurn: () => battleMembers
  
};

gameActions.warriorTurn(warriorLoss);
gameActions.mageTurn(mageLoss);
gameActions.dragonTurn(dragonLoss);

console.log(gameActions.completeTurn());