import { Button, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import Image from "next/image";

export default function WhyBadro() {
  return (
    <Grid p={1} py={8} rowGap={6} container alignItems="center" flexDirection="column">
      <Typography variant="h2" fontSize={32} color="secondary.main">
        چرا از پادرو استفاده کنیم؟
      </Typography>
      <Grid container flexDirection="column">
      <SubjectContainer m={1} my={6} justifyContent="space-between" p={2} container pink item xs={12} md={8}>
        <Grid container item xs={12} md={6} m={2} mr={4}>
          <SectionTitle>
          لورم ایپسوم متن ساختگی
          </SectionTitle>
          <SectionDesc>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </SectionDesc>
          <Button sx={{ color: "#fff", fontSize: "18px", height: "fit-content", px: 2 }} className="orange-gradient">
            ثبت مرسوله
          </Button>
        </Grid>
        <Grid left="-7.5%" position="relative" item xs={12} md={4}>
          <Image objectFit="contain" layout="fill" src="/home/sec1.png" alt="" />
        </Grid>
      </SubjectContainer>
      <SubjectContainer m={1} my={6} justifyContent="space-between" p={2} container flexDirection="row-reverse" item xs={12} md={8}>
        <Grid container item xs={12} md={6} m={2} mr={4}>
          <SectionTitle>
          لورم ایپسوم متن ساختگی
          </SectionTitle>
          <SectionDesc>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </SectionDesc>
          <Button sx={{ color: "#fff", fontSize: "18px", height: "fit-content", px: 2 }} className="blue-gradient">
            ثبت مرسوله
          </Button>
        </Grid>
        <Grid right="-7.5%" position="relative" item xs={12} md={4}>
          <Image objectFit="contain" layout="fill" src="/home/sec2.png" alt="" />
        </Grid>
      </SubjectContainer>
      <SubjectContainer m={1} my={6} justifyContent="space-between" p={2} container pink item xs={12} md={8}>
        <Grid container item xs={12} md={6} m={2} mr={4}>
          <SectionTitle>
          لورم ایپسوم متن ساختگی
          </SectionTitle>
          <SectionDesc>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </SectionDesc>
          <Button sx={{ color: "#fff", fontSize: "18px", height: "fit-content", px: 2 }} className="orange-gradient">
            ثبت مرسوله
          </Button>
        </Grid>
        <Grid left="-7.5%" position="relative" item xs={12} md={4}>
          <Image objectFit="contain" layout="fill" src="/home/sec3.png" alt="" />
        </Grid>
      </SubjectContainer>
      <SubjectContainer m={1} my={6} justifyContent="space-between" p={2} container flexDirection="row-reverse" item xs={12} md={8}>
        <Grid container item xs={12} md={6} m={2} mr={4}>
          <SectionTitle>
          لورم ایپسوم متن ساختگی
          </SectionTitle>
          <SectionDesc>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </SectionDesc>
          <Button sx={{ color: "#fff", fontSize: "18px", height: "fit-content", px: 2 }} className="blue-gradient">
            ثبت مرسوله
          </Button>
        </Grid>
        <Grid right="-7.5%" position="relative" item xs={12} md={4}>
          <Image objectFit="contain" layout="fill" src="/home/sec4.png" alt="" />
        </Grid>
      </SubjectContainer>
      </Grid>
    </Grid>
  )
}

const SectionTitle = styled(Typography)`
  color: #505050;
  font-size: 30px;
`

const SectionDesc = styled(Typography)`
  color: #505050;
  font-size: 24px;
`

type SubjectContainerProps = {
  pink? : boolean;
}

const SubjectContainer = styled(Grid)<SubjectContainerProps>`
  background-color: ${p => p.pink ? "#FFF0E5" : "#E5F6FF"};
  border-radius: 59px;
  min-height: 400px;
  align-self: ${p => p.pink ? "flex-start" : "flex-end"};
  @media(min-width: 900px) {
    margin-right: ${p => p.pink ? "10%" :"unset"};
    margin-left: ${p => !p.pink ? "10%" :"unset"};
  }
`
