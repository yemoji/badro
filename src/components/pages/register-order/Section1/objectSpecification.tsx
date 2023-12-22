import styled from "@emotion/styled";
import { Alert, Grid, TextField as MuiTextField, Typography } from "@mui/material";
import Image from "next/image";

export default function ObjectSpecification() {
  return(
    <Grid rowGap={2} sx={{ background: "#ECF8FE", borderRadius: "59px", p: 4, direction: "ltr" }}  container flexDirection="column" >
      <Typography sx={{ fontSize: {xs: "18px", md: "22px"}, fontWeight: "bold" }}>مشخصات مرسوله</Typography>
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} InputProps={{ endAdornment: "کیلوگرم" }} label="وزن بسته" />
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} InputProps={{ endAdornment: "تومان" }}  label="ارزش مرسوله" />
      </Grid>
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} select label="محتویات مرسوله" />
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} select label="نوع سفارش" />
      </Grid>
    </Grid>
  )
}

const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: '#0576c6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0576c6',
  },
  '& .MuiOutlinedInput-root': {
    background: "#fff",
    borderRadius: "20px",
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: '#0576c6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0576c6',
    },
  },
});
