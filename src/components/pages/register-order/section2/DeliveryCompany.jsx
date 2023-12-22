import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function DelieveryCompany({i, selected, setSelected}) {
  const isActive = i == selected
  return (
    <Grid onClick={() => setSelected(i)} container item xs={12} md={5}  columnGap={5} sx={{ background: "#fff", borderRadius: "30px", flexWrap: "nowrap", cursor: "pointer", border: `2px solid ${isActive ? "blue" : "transparent"}` }}>
      <Grid position="relative" width="28%" sx={{ aspectRatio: "1/1" }}>
        <Image src="/snapp.png" layout="fill" style={{ borderRadius: "30px" }}  alt="snapp" />
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-start" rowGap={3} flexDirection="column">
        <Typography sx={{ fontSize: "20px" }}>اسنپ باکس</Typography>
        <Typography sx={{ fontSize: "20px" }}>هزینه کل: 48500 تومان</Typography>
      </Grid>
    </Grid>
  )
}