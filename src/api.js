const fruits = [
  {
    name: 'apple',
    color: 'red',
    calories: 95,
    totalFatGrams: 0.3,
    sodiumMg: 2,
    proteinGrams: 0.5
  },
  {
    name: 'pear',
    color: 'green',
    calories: 102,
    totalFatGrams: 0.2,
    sodiumMg: 2,
    proteinGrams: 0.6
  },
  {
    name: 'banana',
    color: 'yellow',
    calories: 105,
    totalFatGrams: 0.4,
    sodiumMg: 1,
    proteinGrams: 1.3
  },
  {
    name: 'grape',
    color: 'purple',
    calories: 62,
    totalFatGrams: 0.3,
    sodiumMg: 2,
    proteinGrams: 0.6
  },
  {
    name: 'orange',
    color: 'orange',
    calories: 45,
    totalFatGrams: 0.1,
    sodiumMg: 0,
    proteinGrams: 0.9
  }
];

export const getFruitsNames = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const fruitNames = fruits.map(f => f.name);

      resolve(fruitNames);
    }, 600);
  });

export const getFruit = name =>
  new Promise(resolve => {
    setTimeout(() => {
      const fruit = fruits.find(f => f.name === name);
      resolve(fruit);
    }, 2000);
  });
