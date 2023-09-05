import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbar";
import SliderSelect from "./Components/SliderSelect";

import { getPrevNumDiv10, getNextNumDiv10 } from "./userFunctions";

function App() {
  const initialData = () => {
    const objdata = {
      PrecioLitro: 1.5,
      Consumo100: 4.5,
      Autonomia: 300,
      Litros: 0,
      Coste: 0,
      MinAutonomia: 0,
      MaxAutonomia: 0,
      MinLitros: 1,
      MaxLitros: 45,
      MinCoste: 0,
      MaxCoste: 0,
    };

    const ConsumoKm = objdata.Consumo100 / 100;

    objdata.Litros = Number((objdata.Autonomia * ConsumoKm).toFixed(1));
    objdata.Coste = Number((objdata.Litros * objdata.PrecioLitro).toFixed(1));

    objdata.MinAutonomia = getNextNumDiv10(
      (objdata.MinLitros / ConsumoKm).toFixed(0)
    );
    objdata.MaxAutonomia = getNextNumDiv10(
      (objdata.MaxLitros / ConsumoKm).toFixed(0)
    );

    objdata.MinCoste = Number(
      (objdata.PrecioLitro * objdata.MinLitros).toFixed(1)
    );
    objdata.MaxCoste = Number(
      (objdata.PrecioLitro * objdata.MaxLitros).toFixed(0)
    );

    return objdata;
  };

  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => setData(initialData)}
            >
              Reset values
            </Button>

            <SliderSelect data={data} setData={setData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
