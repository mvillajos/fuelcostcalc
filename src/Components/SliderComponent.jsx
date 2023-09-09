// import React from "react";
import Slider from "@mui/material/Slider";
import { Typography, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import MuiInput from "@mui/material/Input";
import { IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Input = styled(MuiInput)`
  width: 60px;
`;

const styleBtnCalc = {
  borderRadius: 10,
  width: 150,
};

const styleSlider = {
  // color: "success.main",
  marginBottom: 0,
  marginTop: 0,
  trackSize: 20,
  handleSize: 20,
  // maxWidth: "88%",
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
  },
};

const widthBlocks = "92%";

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
    <Stack mt={0}>
      {/* <Stack gap={0.5}> */}
      {/* <Typography variant="h6"> */}
      {/* {unit} {amount} */}
      {/* <Grid container spacing={2} alignItems="space-between"> */}
      {/* <Grid item> */}
      <Typography variant="h6" color="#00cccc" fontWeight={"bold"}>
        {label}
      </Typography>
      {/* </Grid> */}
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
      {/* </Grid> */}

      <Grid container justifyContent={"space-between"} width={widthBlocks}>
        <Grid item>
          {/* xs={7} sm={8} */}
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

        {/* alignContent={"flex-end"} */}
        <Grid item>
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
      {/* </Stack> */}

      {/* <Grid
        container
        spacing={2}
        my={0}
        justifyContent={"flex-start"}
        direction={"row"}
      > */}
      {/* <Grid item>{min}</Grid> */}
      {/* <Grid item xs={7} sm={10}> */}
      {/* xs={textoBtnRecalc ? 9 : 11} */}
      {/* <Slider
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
          /> */}
      {/* </Grid> */}
      {/* <Grid item>{max}</Grid> */}

      {/* <Grid item alignContent={"flex-end"}>
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
      {/* </Grid> */}

      <Stack
        direction="row"
        justifyContent="flex-start"
        mt="0.2rem"
        mb="0"
        width={widthBlocks}
        // height={"2.5rem"}
      >
        <Typography
          height="2rem"
          mr="0.5rem"
          // height="1.5rem"
          // textAlign={"right"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          color="text.secondary"
        >
          {min}
        </Typography>
        <Slider
          // padding="0"

          size={"small"}
          sx={styleSlider}
          min={min}
          max={max}
          defaultValue={defaultValue}
          aria-label="Default"
          valueLabelDisplay="off"
          // onChange={onChange}
          onChange={handleSliderChange}
          value={value2}
          marks
          step={steps}
          aria-labelledby="input-slider"
        />
        <Typography
          // padding="0"
          ml="0.5rem"
          width="3rem"
          // textAlign={"left"}
          display="flex"
          alignItems={"center"}
          justifyContent={"flex-start"}
          color="text.secondary"
        >
          {max}
        </Typography>
      </Stack>

      {/* <Stack direction="row" justifyContent="space-between" width={widthBlocks}>
        <Typography variant="" color="text.secondary">
          {min} {unit}
        </Typography>
        <Typography variant="" color="text.secondary">
          {max} {unit}
        </Typography>
      </Stack> */}
    </Stack>
  );
};

export default SliderComponent;
