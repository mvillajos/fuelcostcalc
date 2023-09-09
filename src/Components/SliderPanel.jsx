import SliderComponent from "./SliderComponent";
import { useState, useEffect } from "react";
import { Button, Divider } from "@mui/material";

import {
  getPrevNumDiv10,
  getNextNumDiv10,
  coste_litros,
  coste_autonomia,
  litros_autonomia,
  litros_coste,
  autonomia_coste,
  autonomia_litros,
} from "../PureJS/userFunctions";
import { defaultValues, defaultCalcValues, Ctes } from "../PureJS/constants";

const SliderPanel = () => {
  // const ConsumoKm = data.Consumo100 / 100;
  // const styleBtnCalc = {
  //   borderRadius: 10,
  //   width: 150,
  // };

  const styleBtnReset = {
    borderRadius: 10,
    width: 200,
    // position: "absolute",
    // top: "10px",
    // left: "40%",
  };

  const styleDivider = {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    bgcolor: "#33334d",
    width: "92%",
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
  }, [valconsumo100]);

  useEffect(() => {
    setValmincoste(coste_litros(Ctes.minLitros, valpreciolitro));
    setValmaxcoste(coste_litros(Ctes.maxLitros, valpreciolitro));

    setValcoste(coste_litros(valcantlitros, valpreciolitro));
  }, [valpreciolitro]);

  return (
    <div>
      <Button
        sx={styleBtnReset}
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => {
          setValconsumo100(defaultValues.Consumo100);
          setValpreciolitro(defaultValues.PrecioLitro);
          setValautonomia(defaultValues.Autonomia);
          setValcantlitros(defaultCalcValues.Litros);
          setValcoste(defaultCalcValues.Coste);
        }}
      >
        Reiniciar valores
      </Button>

      {/* <Divider sx={styleDivider} /> */}

      <SliderComponent
        value2={valconsumo100}
        setValue2={setValconsumo100}
        defaultValue={valconsumo100}
        min={minConsumo100}
        max={maxConsumo100}
        steps={Ctes.consumo100Step}
        unit="L"
        // amount={data.Consumo100}
        label="Consumo x 100Km"
      />

      {/* <Divider sx={styleDivider} /> */}

      <SliderComponent
        value2={valpreciolitro}
        setValue2={setValpreciolitro}
        defaultValue={valpreciolitro}
        min={minPrecioLitro}
        max={maxPrecioLitro}
        steps={Ctes.precioLitroStep}
        unit="€"
        // amount={data.PrecioLitro}
        label="Precio Litro"
      />

      {/* <Divider sx={styleDivider} /> */}

      <SliderComponent
        value2={valautonomia}
        setValue2={setValautonomia}
        defaultValue={valautonomia}
        min={valminautonomia}
        max={valmaxautonomia}
        steps={Ctes.autonomiaStep}
        unit="Km"
        // amount={data.Autonomia}
        label="Autonomia"
        textoBtnRecalc="Calc por Km"
        handleRecalc={(e) => {
          setValcantlitros(litros_autonomia(valautonomia, valconsumo100));
          setValcoste(
            coste_autonomia(valautonomia, valconsumo100, valpreciolitro)
          );
        }}
      />

      {/* <Button
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          setValcantlitros(litros_autonomia(valautonomia, valconsumo100));
          setValcoste(
            coste_autonomia(valautonomia, valconsumo100, valpreciolitro)
          );
        }}
      >
        Calc by AUTONOMIA
      </Button> */}

      {/* <Divider sx={styleDivider} /> */}

      <SliderComponent
        value2={valcantlitros}
        setValue2={setValcantlitros}
        defaultValue={valcantlitros}
        min={Ctes.minLitros}
        max={Ctes.maxLitros}
        steps={Ctes.litrosStep}
        unit="L"
        // amount={data.Litros}
        label="Cantidad Fuel"
        textoBtnRecalc={"Calc por l"}
        handleRecalc={(e) => {
          setValcoste(coste_litros(valcantlitros, valpreciolitro));
          setValautonomia(autonomia_litros(valcantlitros, valconsumo100));
        }}
      />

      {/* <Button
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          setValcoste(coste_litros(valcantlitros, valpreciolitro));
          setValautonomia(autonomia_litros(valcantlitros, valconsumo100));
        }}
      >
        Calc by LITROS
      </Button> */}

      {/* <Divider sx={styleDivider} /> */}

      <SliderComponent
        value2={valcoste}
        setValue2={setValcoste}
        defaultValue={valcoste}
        min={valmincoste}
        max={valmaxcoste}
        steps={Ctes.costeStep}
        unit="€"
        // amount={data.Coste}
        label="Coste"
        textoBtnRecalc={"Calc por €"}
        handleRecalc={(e) => {
          setValcantlitros(litros_coste(valcoste, valpreciolitro));
          setValautonomia(
            autonomia_coste(valcoste, valpreciolitro, valconsumo100)
          );
        }}
      />
      {/* <Button
        sx={styleBtnCalc}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          setValcantlitros(litros_coste(valcoste, valpreciolitro));
          setValautonomia(
            autonomia_coste(valcoste, valpreciolitro, valconsumo100)
          );
        }}
      >
        Calc by COSTE
      </Button> */}

      {/* <Divider sx={styleDivider} /> */}
    </div>
  );
};

export default SliderPanel;
