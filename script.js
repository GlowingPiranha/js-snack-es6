const bikes = [

  {
    name: "Cervelo S5",
    weight: 6.81,
  },
  {
    name: "Grevil F",
    weight: 8.85,
  },
  {
    name: "Colnago C68 Vélo",
    weight: 7.20,
  },
  {
    name: "Teammachine R 01 LTD",
    weight: 7.00,
  },
  {
    name: "Tarmac SL7",
    weight: 8.10,
  },
  {
    name: "Impulso RC",
    weight: 8.10,
  },
  {
    name: "Triestina 0 SLR",
    weight: 6.50,
  },
  {
    name: "Trek Checkpoint SLR 6 eTap",
    weight: 8.69,
  }];

let less = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < less.weight) {
    less = bikes[i];
  }
}

console.log(`Questa è la bici ${less.name} con il peso di ${less.weight}. è la più leggera!`);