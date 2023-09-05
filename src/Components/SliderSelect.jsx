import SliderComponent from "./SliderComponent";

import { getPrevNumDiv10, getNextNumDiv10 } from "../userFunctions";

const SliderSelect = ({ data, setData }) => {
  const ConsumoKm = data.Consumo100 / 100;
  const minConsumo100 = 4;
  const maxConsumo100 = 6;
  const minPrecioLitro = 1.3;
  const maxPrecioLitro = 2;

  const consumo100Step = 0.1;
  const precioLitroStep = 0.01;
  const autonomiaStep = 10;
  const litrosStep = 1;
  const costeStep = 1;

  // const minCoste=Number((minPrecioLitro * data.MinLitros).toFixed(0));
  //const minAutonomia=Number((data.MinLitros / ConsumoKm).toFixed(0));

  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            Consumo100: value,
            ConsumoKm: value / 100,
            Autonomia: Number((data.Litros / (value / 100)).toFixed(0)),
            MinAutonomia: getNextNumDiv10(
              (data.MinLitros / (value / 100)).toFixed(0)
            ),
            MaxAutonomia: getNextNumDiv10(
              (data.MaxLitros / (value / 100)).toFixed(0)
            ),
          });
        }}
        defaultValue={data.Consumo100}
        min={minConsumo100}
        max={maxConsumo100}
        steps={consumo100Step}
        unit="L"
        amount={data.Consumo100}
        label="Consumo 100Km"
        value={data.Consumo100}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            PrecioLitro: value,
            Coste: Number((data.Litros * value).toFixed(1)),
            MinCoste: Number((value * data.MinLitros).toFixed(1)),
            MaxCoste: Number((value * data.MaxLitros).toFixed(0)),
          });
        }}
        defaultValue={data.PrecioLitro}
        min={minPrecioLitro}
        max={maxPrecioLitro}
        steps={precioLitroStep}
        unit="€"
        amount={data.PrecioLitro}
        label="Precio Litro"
        value={data.PrecioLitro}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            Autonomia: value,
            Litros: Number((value * ConsumoKm).toFixed(1)),
            Coste: Number((value * ConsumoKm * data.PrecioLitro).toFixed(1)),
          });
        }}
        defaultValue={data.Autonomia}
        min={data.MinAutonomia}
        max={data.MaxAutonomia}
        steps={autonomiaStep}
        unit="Km"
        amount={data.Autonomia}
        label="Autonomia"
        value={data.Autonomia}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            Litros: value,
            Coste: Number((value * data.PrecioLitro).toFixed(1)),
            Autonomia: Number((value / ConsumoKm).toFixed(0)),
          });
        }}
        defaultValue={data.Litros}
        min={data.MinLitros}
        max={data.MaxLitros}
        steps={litrosStep}
        unit="L"
        amount={data.Litros}
        label="Cantidad Fuel"
        value={data.Litros}
      />

      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            Coste: value,
            Litros: Number((value / data.PrecioLitro).toFixed(1)),
            Autonomia: Number(
              (value / data.PrecioLitro / ConsumoKm).toFixed(0)
            ),
          });
        }}
        defaultValue={data.Coste}
        min={data.MinCoste}
        max={data.MaxCoste}
        steps={costeStep}
        unit="€"
        amount={data.Coste}
        label="Coste"
        value={data.Coste}
      />
    </div>
  );
};

export default SliderSelect;
