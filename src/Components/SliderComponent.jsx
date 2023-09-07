// import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";

import { useState } from "react";

const Input = styled(MuiInput)`
  width: 60px;
`;

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,

  value2,
  setValue2,

  steps,
}) => {
  // const [value2, setValue2] = useState(defaultValue);

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

  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="h5">{label}</Typography>
        <Typography variant="h6">
          {/* {unit} {amount} */}
          {/* {unit} */}
          <Input
            // style={"margin-left: 10px"}
            value={value2}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: steps,
              min: min,
              max: max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Typography>
      </Stack>
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

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
