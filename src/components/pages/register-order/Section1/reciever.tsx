import styled from "@emotion/styled";
import { Alert, Grid, TextField as MuiTextField, Typography } from "@mui/material";
import Image from "next/image";

export default function Reciever() {
  return(
    <Grid rowGap={2} sx={{ background: "#FFF0E5", borderRadius: "59px", p: 4, direction: "ltr" }}  container flexDirection="column" >
      <Typography sx={{ fontSize: {xs: "18px", md: "22px"}, fontWeight: "bold" }}>آدرس فرستنده</Typography>
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="نام" />
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="نام خانوادگی" />
      </Grid>
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="کد ملی‌" />
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="شماره موبایل" />
      </Grid>
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="استان" select />
        <TextField sx={{ width: { md: "48%", xs: "95%" } }} label="شهر" select/>
      </Grid>
      <Alert sx={{ fontSize: "16px", border: "2px solid #89A7E0", borderRadius: "20px" }} variant="standard" severity="info">
        ابتدا بر روی مکان نما کلیک کرده و محدوده آدرس را مشخص کنید
      </Alert>
      {/* <Grid position="relative" width="90%" height="20vh"> */}
        <Image width={781} height={450} src="/map.png" alt="" />
      {/* </Grid> */}
      <TextField label="آدرس پستی" />
      <Grid columnGap={2} rowGap={2} flexWrap="nowrap" justifyContent="space-between" container>
        <TextField label="پلاک" />
        <TextField label="واحد" />
        <TextField label="کد پستی" />
      </Grid>
    </Grid>
  )
}

const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: '#FE8B3B',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FE8B3B',
  },
  '& .MuiOutlinedInput-root': {
    background: "#fff",
    borderRadius: "20px",
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: '#FE8B3B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FE8B3B',
    },
  },
});
