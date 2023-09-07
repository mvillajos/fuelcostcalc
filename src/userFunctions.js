export function getPrevNumDiv10(num) {
  let num2 = Number(num);

  while (num2 % 10 != 0) {
    num2--;
  }

  return num2;
}

export function getNextNumDiv10(num) {
  let num2 = Number(num);

  while (num2 % 10 != 0) {
    num2++;
  }

  return num2;
}

export function coste_litros(litros, preciolitro) {
  return Number((litros * preciolitro).toFixed(1));
}

export function coste_autonomia(autonomia, consumo100, preciolitro) {
  const consumoKm = Number(consumo100 / 100);
  return Number((autonomia * consumoKm * preciolitro).toFixed(1));
}

export function litros_autonomia(autonomia, consumo100) {
  const consumoKm = Number(consumo100 / 100);
  return Number((autonomia * consumoKm).toFixed(1));
}

export function litros_coste(coste, preciolitro) {
  return Number((coste / preciolitro).toFixed(1));
}

export function autonomia_litros(litros, consumo100) {
  const consumoKm = Number(consumo100 / 100);
  return Number((litros / consumoKm).toFixed(0));
}

export function autonomia_coste(coste, preciolitro, consumo100) {
  const consumoKm = Number(consumo100 / 100);
  return Number((coste / preciolitro / consumoKm).toFixed(0));
}
