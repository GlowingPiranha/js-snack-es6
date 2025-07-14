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
// variabile che inizializzo col primo elemento

// funzione che confronta ogni elemento con il più leggero fino a quel momento, se trovi più leggero lo salva come nuovo minimo
for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < less.weight) {
    less = bikes[i];
  }
}

console.log(`Questa è la bici ${less.name} con il peso di ${less.weight}. è la più leggera!`);




// snack due

const squadre = [
  {
    name: "Triestina",
    points: 0,
    faults: 0,
  },
  {
    name: "Milan",
    points: 0,
    faults: 0,
  },
  {
    name: "Inter",
    points: 0,
    faults: 0,
  },
  {
    name: "Lazio",
    points: 0,
    faults: 0,
  },
  {
    name: "Udinese",
    points: 0,
    faults: 0,
  },
  {
    name: "",
    points: 0,
    faults: 0,
  },
  {
    name: "",
    points: 0,
    faults: 0,
  },
]

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

