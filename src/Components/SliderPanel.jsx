import SliderComponent from "./SliderComponent";
import { useState, useEffect } from "react";
import { Button, Stack, Divider } from "@mui/material";

import {
  getPrevNumDiv10,
  getNextNumDiv10,
  coste_litros,
  coste_autonomia,
  litros_autonomia,
  litros_coste,
  autonomia_coste,
  autonomia_litros,
} from "../userFunctions";
import { defaultValues, defaultCalcValues, Ctes } from "../constants";

const SliderPanel = () => {
  // const ConsumoKm = data.Consumo100 / 100;
  const styleBtnCalc = {
    borderRadius: 10,
    width: 200,
  };

  const styleDivider = {
    marginTop: "20px",
    marginBottom: "20px",
    bgcolor: "#669999",
    // height: 2,
  };

  //Valores que posteriormente serán parametrizables mediante un componente
  const minConsumo100 = 4;
  const maxConsumo100 = 6;
  const minPrecioLitro = 1.3;
  const maxPrecioLitro = 2;

  const [valconsumo100, setValconsumo100] = useState(defaultValues.Consumo100);
  const [valpreciolitro, setValpreciolitro] = useState(
    defaultValues.PrecioLitro
  );
  const [valautonomia, setValautonomia] = useState(defaultValues.Autonomia);
  const [valcantlitros, setValcantlitros] = useState(defaultCalcValues.Litros);
  const [valcoste, setValcoste] = useState(defaultCalcValues.Coste);

  const [valminautonomia, setValminautonomia] = useState(
    defaultCalcValues.MinAutonomia
  );
  const [valmaxautonomia, setValmaxautonomia] = useState(
    defaultCalcValues.MaxAutonomia
  );
  const [valmincoste, setValmincoste] = useState(defaultCalcValues.MinCoste);
  const [valmaxcoste, setValmaxcoste] = useState(defaultCalcValues.MaxCoste);

  useEffect(() => {
    setValminautonomia(
      getNextNumDiv10(autonomia_litros(Ctes.minLitros, valconsumo100))
    );
    setValmaxautonomia(
      getPrevNumDiv10(autonomia_litros(Ctes.maxLitros, valconsumo100))
    );

    setValautonomia(autonomia_litros(valcantlitros, valconsumo100));
    // setData({
    //   ...data,
    //   //Consumo100: valconsumo100,
    //   //ConsumoKm: valconsumo100 / 100,
    //   //Autonomia: Number((data.Litros / (valconsumo100 / 100)).toFixed(0)),
    //   MinAutonomia: getNextNumDiv10(
    //     (data.MinLitros / (valconsumo100 / 100)).toFixed(0)
    //   ),
    //   MaxAutonomia: getNextNumDiv10(
    //     (data.MaxLitros / (valconsumo100 / 100)).toFixed(0)
    //   ),
    // });
    //return () => {};
  }, [valconsumo100]);

  useEffect(() => {
    // setData({
    //   ...data,
    //   //PrecioLitro: valpreciolitro,
    //   //Coste: Number((data.Litros * valpreciolitro).toFixed(1)),
    //   MinCoste: Number((valpreciolitro * data.MinLitros).toFixed(1)),
    //   MaxCoste: Number((valpreciolitro * data.MaxLitros).toFixed(0)),
    // });

    setValmincoste(coste_litros(Ctes.minLitros, valpreciolitro));
    setValmaxcoste(coste_litros(Ctes.maxLitros, valpreciolitro));

    setValcoste(coste_litros(valcantlitros, valpreciolitro));
  }, [valpreciolitro]);

  return (
    <div>
      <Button
        sx={styleBtnCalc}
        variant="contained"
        color="secondary"
        size="medium"
        onClick={() => {
          setValconsumo100(defaultValues.Consumo100);
          setValpreciolitro(defaultValues.PrecioLitro);
          setValautonomia(defaultValues.Autonomia);
          setValcantlitros(defaultCalcValues.Litros);
          setValcoste(defaultCalcValues.Coste);
        }}
      >
        Reset values
      </Button>

      <Divider sx={styleDivider} />

      <SliderComponent
        value2={valconsumo100}
        setValue2={setValconsumo100}
        // onChange={(e, value) => {
        //   setData({
        //     ...data,
        //     Consumo100: value,
        //     ConsumoKm: value / 100,
        //     Autonomia: Number((data.Litros / (value / 100)).toFixed(0)),
        //     MinAutonomia: getNextNumDiv10(
        //       (data.MinLitros / (value / 100)).toFixed(0)
        //     ),
        //     MaxAutonomia: getNextNumDiv10(
        //       (data.MaxLitros / (value / 100)).toFixed(0)
        //     ),
        //   });
        // }}
        // handleInputChange={(e) => {
        //   setData({
        //     ...data,
        //     Consumo100: handleChanges(
        //       data.minConsumo100,
        //       data.maxConsumo100,
        //       e.target.value
        //     ),
        //   });
        // }}
        defaultValue={valconsumo100}
        min={minConsumo100}
        max={maxConsumo100}
        steps={Ctes.consumo100Step}
        unit="L"
        // amount={data.Consumo100}
        label="Consumo 100Km"
        // value={data.Consumo100}
      />

      <Divider sx={styleDivider} />

      <SliderComponent
        value2={valpreciolitro}
        setValue2={setValpreciolitro}
        // onChange={(e, value) => {
        //   setData({
        //     ...data,
        //     PrecioLitro: value,
        //     Coste: Number((data.Litros * value).toFixed(1)),
        //     MinCoste: Number((value * data.MinLitros).toFixed(1)),
        //     MaxCoste: Number((value * data.MaxLitros).toFixed(0)),
        //   });
        // }}
        defaultValue={valpreciolitro}
        min={minPrecioLitro}
        max={maxPrecioLitro}
        steps={Ctes.precioLitroStep}
        unit="€"
        // amount={data.PrecioLitro}
        label="Precio Litro"
        // value={data.PrecioLitro}
      />

      <Divider sx={styleDivider} />

      <SliderComponent
        value2={valautonomia}
        setValue2={setValautonomia}
        // onChange={(e, value) => {
        //   setData({
        //     ...data,
        //     Autonomia: value,
        //     Litros: Number((value * ConsumoKm).toFixed(1)),
        //     Coste: Number((value * ConsumoKm * data.PrecioLitro).toFixed(1)),
        //   });
        // }}
        defaultValue={valautonomia}
        min={valminautonomia}
        max={valmaxautonomia}
        steps={Ctes.autonomiaStep}
        unit="Km"
        // amount={data.Autonomia}
        label="Autonomia"
        // value={data.Autonomia}
      />
      <Button
        // className="btncalculo"
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          setValcantlitros(litros_autonomia(valautonomia, valconsumo100));
          setValcoste(
            coste_autonomia(valautonomia, valconsumo100, valpreciolitro)
          );
        }}
      >
        Calc by AUTONOMIA
      </Button>

      <Divider sx={styleDivider} />

      <SliderComponent
        value2={valcantlitros}
        setValue2={setValcantlitros}
        // onChange={(e, value) => {
        //   setData({
        //     ...data,
        //     Litros: value,
        //     Coste: Number((value * data.PrecioLitro).toFixed(1)),
        //     Autonomia: Number((value / ConsumoKm).toFixed(0)),
        //   });
        // }}
        defaultValue={valcantlitros}
        min={Ctes.minLitros}
        max={Ctes.maxLitros}
        steps={Ctes.litrosStep}
        unit="L"
        // amount={data.Litros}
        label="Cantidad Fuel"
        // value={data.Litros}
      />
      <Button
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          setValcoste(coste_litros(valcantlitros, valpreciolitro));
          setValautonomia(autonomia_litros(valcantlitros, valconsumo100));
        }}
      >
        Calc by LITROS
      </Button>

      <Divider sx={styleDivider} />

      <SliderComponent
        value2={valcoste}
        setValue2={setValcoste}
        // onChange={(e, value) => {
        //   setData({
        //     ...data,
        //     Coste: value,
        //     Litros: Number((value / data.PrecioLitro).toFixed(1)),
        //     Autonomia: Number(
        //       (value / data.PrecioLitro / ConsumoKm).toFixed(0)
        //     ),
        //   });
        // }}
        defaultValue={valcoste}
        min={valmincoste}
        max={valmaxcoste}
        steps={Ctes.costeStep}
        unit="€"
        // amount={data.Coste}
        label="Coste"
        // value={data.Coste}
      />
      <Button
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          setValcantlitros(litros_coste(valcoste, valpreciolitro));
          setValautonomia(
            autonomia_coste(valcoste, valpreciolitro, valconsumo100)
          );
        }}
      >
        Calc by COSTE
      </Button>

      <Divider sx={styleDivider} />
    </div>
  );
};

export default SliderPanel;
