import styled from "@emotion/styled";
import { Button, Checkbox, FormControlLabel, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Input, Label } from "@src/components/commons/formComponents";
import Image from "next/image";
import NextLink from "next/link";

export default function Login() {
  return (
    <Grid alignItems="center" justifyContent="space-evenly" sx={{ background: "url('/login/bg.png')", backgroundSize: "cover", minHeight: "100vh", py: "5%" }} container>
      <Form sx={{ minHeight: {xs: "70vh", md: "none"}, justifyContent: { xs: "space-between", md: "none" } }} alignItems="center" py={2} px={4} container flexDirection="column" item xs={10} md={7} lg={5}>
      <Grid>
        <Image src="/logofa.svg" alt="logo" width={107} height={48} />
      </Grid>
      <Title sx={{ my: 4, alignSelf: "flex-start" }}>ورود به حساب کاربری</Title>
        <Grid my={3} container position="relative">
          <Label htmlFor="email">شماره موبایل یا ایمیل</Label>
          <Input id="email" />
        </Grid>
        <Grid container my={1}>
        <FormControlLabel control={<Checkbox color="secondary" defaultChecked />} label="شرایط و قوانین استفاده از خدمات بادرو را می‌پذیرم." />
        </Grid>
        <Grid container>
          <Button color="primary" fullWidth variant="contained" sx={{ my: 2,fontSize: "22px",  color: "#fff" }}>ثبت نام</Button>
        </Grid>
        <Grid container columnGap={1} justifyContent="center">
        <Typography color="#000">حساب کاربری ندارید؟</Typography>
        <NextLink passHref href="/register">
          <Link sx={{ color: "primary.main" }}>ساخت حساب کاربری</Link>
        </NextLink>
        </Grid>
      </Form>
      <Grid item xs={3} position="relative" alignSelf="stretch" sx={{display: {xs: "none",md:  "block"}} }>
        <Image style={{ maxHeight: "750px" }} layout="fill" src="/login/prs.png" alt="" objectFit="contain" />
      </Grid>
    </Grid>
  )
}

const Link = styled(MuiLink)`
  text-decoration: none;
`;


const Title = styled(Typography)`
  font-size: 28px;
  color: #000;
  @media(max-width: 900px) {
    font-size: 16px;
  }
`

const Form = styled(Grid)`
  border-radius: 59px;
  background: #E5F6FF;
  @media(max-width: 900px) {
    height: fit-content;
  }
`