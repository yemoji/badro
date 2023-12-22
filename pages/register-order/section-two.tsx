import { Box, Button, Grid, Step, StepButton, Stepper, Typography } from "@mui/material";
import Navbar from "@src/components/commons/navbar/navbar";
import DelieveryCompany from "src/components/pages/register-order/section2/DeliveryCompany"
import { useState } from "react";

const steps = ["ثبت اطلاعات", "انتخاب شرکت پستی", "انتخاب زمان جمع آوری"];

export default function RegisterOrder() {
  const [selected, setSelected] = useState<number>(-1)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({0: true});
  return (
    <Grid sx={{ direction: "ltr" }} container alignItems="center" flexDirection="column">
      <Navbar />
      <Grid container flexDirection="column" maxWidth="1836px" px={2} justifyContent="center" alignItems="center">

      <Box sx={{ width: "50%", minWidth: "fit-content" }}>
        <Stepper activeStep={1}>
          {steps.map((label, index) => (
            <Step sx={{ ".MuiStepLabel-labelContainer": {mr: 1} }} key={label} completed={completed[index]}>
              <StepButton color="inherit">
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Grid flexDirection="column" rowGap={2} item xs={12} md={10} justifyContent="space-between" container sx={{ background: "#ECF8FE", borderRadius: "20px", p: 3  }}>
      <Typography sx={{ fontSize: {xs: "18px", md: "22px"}, fontWeight: "bold" }}>پیشنهاد ما</Typography>
        <Grid columnGap={2} rowGap={2} container justifyContent="space-between">
          {[0,1].map((i,index) => (
            <DelieveryCompany i={index} selected={selected} setSelected={setSelected} />
          ))}
        </Grid>
      </Grid>
      <Grid mt={3} flexDirection="column" rowGap={2} item xs={12} md={10} justifyContent="space-between" container sx={{ background: "#ECF8FE", borderRadius: "20px", p: 3  }}>
        <Grid columnGap={2} rowGap={2} container justifyContent="space-between">
        {[0,1,2,3,4,5,6].map((i,index) => (
            <DelieveryCompany i={index} selected={selected} setSelected={setSelected} />
          ))}
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
