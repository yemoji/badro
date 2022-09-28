import styled from "@emotion/styled"
import { Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Navbar from "../../commons/navbar/navbar"

export default function HeaderHome () {
  return(
    <Container alignItems="center" container flexDirection="column" pb={4}>
      <Navbar />
      <Title mt="5vh">
        با <Image src="/logofa.svg" alt="بادرو" height={48} width={107} /> برای انتخاب شرکت پستی دستت بازه!
      </Title>
      <TitleSec sx={{ color: "primary.main" }}>انتخاب . . . ترین شرکت پستی با بادرو
      <Grid position="absolute" sx={{ top: "22px", right: "56px"}}>
        <Image src="/home/sarei.png" width={201} height={85} alt="سریع ارزان محبوب" />
      </Grid>
      </TitleSec>
      <Grid flexWrap="nowrap" px={1} container flexDirection="column" flexGrow={2} justifyContent="flex-end">
        <Grid container item xs={12} md={9} lg={8} sx={{ flexDirection: { xs: "column", md: "row" }, mx: "auto" }}>
          <SubmitContainer px={4} py={2} container item xs={12} md={6} flexDirection="column">
            <Typography mb={2} mt={1} variant="h1" fontSize={20} >ثبت سفارش</Typography>
            <Typography variant="h1" fontSize={16} >برای <Typography component="span" color="primary.main">ثبت مرسولات</Typography> از همین دکمه زیر استفاده کن</Typography>
            <Grid flexWrap="nowrap" container alignItems="center" mt={1} justifyContent="flex-end">
              <Grid ml={1} position="relative" height={77} maxWidth={300} flexGrow={2}>
                <Image layout="fill" src="/home/flash.svg" alt="" />
              </Grid>
              <Button variant="contained" sx={{ bgcolor: "primary.main",py: 1, color: "#fff", height: "fit-content" }}>ثبت مرسوله</Button>
            </Grid>
          </SubmitContainer>
          <PeygiriContainer px={4} py={2} container item xs={12} md={6} flexDirection="column">
            <Typography mb={2} mt={1} variant="h1" fontSize={20} >پیگیری سفارش</Typography>
            <Typography variant="h1" color="secondary.main" fontSize={16}>از طریق بادررو می تونی تمامی مرسولات خودتو پیگیری کنی</Typography>
            <Grid flexWrap="wrap" container alignItems="center" mt={1} justifyContent="flex-end">
              <Grid display="flex" alignItems="center" ml={1} position="relative" height={77} maxWidth={300} flexGrow={2}>
                <Input placeholder="کد پیگیری مرسوله را وارد کنید" />
              </Grid>
              <Button variant="contained" sx={{ bgcolor: "secondary.main",py: 1, color: "#fff", height: "fit-content" }}>پیگیری مرسوله</Button>
            </Grid>
          </PeygiriContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

const Input = styled.input`
  border-radius: 12px;
  color: #000;
  height: 60px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  ::placeholder {
    color: #000;
  }

`

const SubmitContainer = styled(Grid)`
  border-top-right-radius: 59px;
  border-bottom-right-radius: 59px;
  background-color: #fffffff2;
`

const PeygiriContainer = styled(Grid)`
  border-top-left-radius: 59px;
  border-bottom-left-radius: 59px;
  background-color: #EDF9FFf2;
`

const Container = styled(Grid)`
  min-height: 100vh;
  background: url("/home/bgmain.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`

const Title = styled(Grid)`
  font-size: 44px;
  font-weight: bold;
`

const TitleSec = styled(Grid)`
  font-size: 26px;
  position: relative;
`
