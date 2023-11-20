import styled from "@emotion/styled";
import { Grid, TextField as MuiTextField, Typography } from "@mui/material";

export default function Sender() {
  return(
    <Grid rowGap={2} sx={{ background: "#ECF8FE", borderRadius: "59px", p: 4 }}  container flexDirection="column" >
      <Typography sx={{ fontSize: {xs: "18px", md: "22px"}, fontWeight: "bold" }}>آدرس فرستنده</Typography>
      <Grid container>
        <TextField label="نام" />
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
