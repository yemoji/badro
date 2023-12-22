import { Box, Button, Grid, Step, StepButton, Stepper } from "@mui/material";
import Navbar from "@src/components/commons/navbar/navbar";
import ObjectSpecification from "@src/components/pages/register-order/Section1/objectSpecification";
import Reciever from "@src/components/pages/register-order/Section1/reciever";
import Sender from "@src/components/pages/register-order/Section1/seder";
import { useState } from "react";

const steps = ["ثبت اطلاعات", "انتخاب شرکت پستی", "انتخاب زمان جمع آوری"];

export default function RegisterOrder() {
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  return (
    <Grid sx={{ direction: "ltr" }} container alignItems="center" flexDirection="column">
      <Navbar />
      <Grid container flexDirection="column" maxWidth="1836px" px={2} justifyContent="center" alignItems="center">

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
      <Grid container columnGap={2} sx={{ justifyContent: "center", my: 4, flexDirection: {xs: "column", md: "row"} }}>
        <Grid item xs={12} md={5}>
          <Sender />
        </Grid>
        <Grid item xs={12} md={5}>
          <Reciever />
        </Grid>
      </Grid>
      <Grid item xs={12} md={10} justifyContent="space-between" container sx={{ background: "#ECF8FE", borderRadius: "20px", p: 3  }}>
        <Grid item xs={12} md={5}>
          <ObjectSpecification />
        </Grid>
        <Grid item xs={12} md={5}>
          <ObjectSpecification />
        </Grid>
      </Grid>
      <Grid item xs={12} md={10} my={4} columnGap={2} container justifyContent="flex-end">
        <Button>انصراف</Button>
        <Button sx={{ color: "#fff", borderRadius: "20px" }} variant="contained">ثبت سفارش</Button>
      </Grid>
    </Grid>
    </Grid>
  );
}
