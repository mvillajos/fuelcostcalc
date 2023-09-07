import {
  getPrevNumDiv10,
  getNextNumDiv10,
  coste_litros,
  coste_autonomia,
  litros_autonomia,
  autonomia_litros,
} from "./userFunctions";

export const defaultValues = {
  PrecioLitro: 1.5,
  Consumo100: 4.5,
  ConsumoKm: 0.045,
  Autonomia: 300,
};

export const Ctes = {
  consumo100Step: 0.1,
  precioLitroStep: 0.01,
  autonomiaStep: 10,
  litrosStep: 1,
  costeStep: 1,
  minLitros: 1,
  maxLitros: 45,
};

export const defaultCalcValues = {
  Litros: litros_autonomia(defaultValues.Autonomia, defaultValues.Consumo100),

  Coste: coste_autonomia(
    defaultValues.Autonomia,
    defaultValues.Consumo100,
    defaultValues.PrecioLitro
  ),

  MinAutonomia: getNextNumDiv10(
    autonomia_litros(Ctes.minLitros, defaultValues.Consumo100)
  ),
  MaxAutonomia: getPrevNumDiv10(
    autonomia_litros(Ctes.maxLitros, defaultValues.Consumo100)
  ),

  MinCoste: coste_litros(Ctes.minLitros, defaultValues.PrecioLitro),
  MaxCoste: coste_litros(Ctes.maxLitros, defaultValues.PrecioLitro),
};

// const defaultCalcValues = () => {
//   const objdata = {
//     Litros: 0,
//     Coste: 0,
//     MinAutonomia: 0,
//     MaxAutonomia: 0,
//     MinCoste: 0,
//     MaxCoste: 0,
//   };

//   objdata.Litros = litros_autonomia(
//     defaultValues.Autonomia,
//     defaultValues.Consumo100
//   );
//   objdata.Coste = coste_litros(objdata.Litros, defaultValues.PrecioLitro);

//   objdata.MinAutonomia = getNextNumDiv10(
//     autonomia_litros(Ctes.minLitros, defaultValues.Consumo100)
//   );
//   objdata.MaxAutonomia = getNextNumDiv10(
//     autonomia_litros(Ctes.maxLitros, defaultValues.Consumo100)
//   );

//   objdata.MinCoste = coste_litros(Ctes.minLitros, defaultValues.PrecioLitro);
//   objdata.MaxCoste = coste_litros(Ctes.maxLitros, defaultValues.PrecioLitro);

//   return objdata;
// };
