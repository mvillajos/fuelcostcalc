// import React from "react";
import Slider from "@mui/material/Slider";
import { Typography, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import MuiInput from "@mui/material/Input";
import { IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Input = styled(MuiInput)`
  width: 100px;
`;

const styleBtnCalc = {
  borderRadius: 10,
  width: 100,
};

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  value2,
  setValue2,
  steps,
  handleRecalc,
  textoBtnRecalc,
}) => {
  const handleSliderChange = (event, newValue) => {
    setValue2(newValue);
  };

  const handleInputChange = (event) => {
    setValue2(event.target.value === "" ? min : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value2 < min) {
      setValue2(min);
    } else if (value2 > max) {
      setValue2(max);
    }
  };

  const handleDecClick = () => {
    const strnum = steps.toString();
    let numdec = 0;
    if (strnum.includes(".")) {
      let partenum = strnum.split(".");
      numdec = partenum[1].toString().length;
    }
    let newValue = Number((value2 - steps).toFixed(numdec));

    if (newValue < min) {
      newValue = min;
    }

    setValue2(newValue);
  };

  const handleIncClick = () => {
    const strnum = steps.toString();
    let numdec = 0;
    if (strnum.includes(".")) {
      let partenum = strnum.split(".");
      numdec = partenum[1].toString().length;
    }
    let newValue = Number((value2 + steps).toFixed(numdec));

    if (newValue > max) {
      newValue = max;
    }

    setValue2(newValue);
  };

  return (
    <Stack my={0}>
      <Stack gap={0.5}>
        {/* <Typography variant="h6"> */}
        {/* {unit} {amount} */}
        <Grid container spacing={5} alignItems="space-between">
          <Grid item>
            <Typography variant="h6">{label}</Typography>
          </Grid>
          {/* <Grid item>
            {textoBtnRecalc && (
              <Button
                sx={styleBtnCalc}
                variant="contained"
                color="primary"
                size="small"
                onClick={handleRecalc}
              >
                {textoBtnRecalc}
              </Button>
            )}
          </Grid> */}
        </Grid>

        <Grid>
          <IconButton size="small" onClick={handleDecClick}>
            <ArrowLeft fontSize="medium" color="primary" />
          </IconButton>
          <Input
            value={value2}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: steps,
              min: min,
              max: max,
              style: { textAlign: "center" },
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
          <IconButton size="small" onClick={handleIncClick}>
            <ArrowRight fontSize="medium" color="secondary" />
          </IconButton>
          {/* </Typography> */}
        </Grid>
      </Stack>

      <Grid container spacing={1} justifyContent={"space-between"}>
        <Grid item>{min}</Grid>
        <Grid item xs={textoBtnRecalc ? 9 : 11}>
          <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            // onChange={onChange}
            onChange={handleSliderChange}
            value={value2}
            marks
            step={steps}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>{max}</Grid>

        <Grid item alignContent={"flex-end"}>
          {textoBtnRecalc && (
            <Button
              sx={styleBtnCalc}
              variant="contained"
              color="primary"
              size="small"
              onClick={handleRecalc}
            >
              {textoBtnRecalc}
            </Button>
          )}
        </Grid>
      </Grid>

      {/* <Stack direction="row" justifyContent="space-between">
        <Typography variant="" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack> */}
    </Stack>
  );
};

export default SliderComponent;
