import { Grid } from "@mui/material";
import Footer from "@src/components/commons/footer/footer";
import Navbar from "@src/components/commons/navbar/navbar";
import HeaderAboutUs from "@src/components/pages/aboutus/Header";
import StatisticsAboutus from "@src/components/pages/aboutus/statistics";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Grid container alignItems="center" flexDirection="column">
      <Navbar />
      <HeaderAboutUs />
      <Grid>
        <Image src="/logofa.svg" alt="logo" width={328} height={145} />
      </Grid>
      <StatisticsAboutus />
      <Footer />
    </Grid>
  )
}