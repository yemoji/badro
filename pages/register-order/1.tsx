import { Box, Grid, Step, StepButton, Stepper } from "@mui/material";
import Navbar from "@src/components/commons/navbar/navbar";
import Sender from "@src/components/pages/register-order/Section1/seder";
import { useState } from "react";

const steps = ["ثبت اطلاعات", "انتخاب شرکت پستی", "انتخاب زمان جمع آوری"];

export default function RegisterOrder() {
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  return (
    <Grid container alignItems="center" flexDirection="column">
      <Navbar />
      <Box sx={{ width: "50%", minWidth: "fit-content" }}>
        <Stepper activeStep={0}>
          {steps.map((label, index) => (
            <Step sx={{ ".MuiStepLabel-labelContainer": {mr: 1} }} key={label} completed={completed[index]}>
              <StepButton color="inherit">
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Sender />
        </Grid>
      </Grid>
    </Grid>
  );
}
