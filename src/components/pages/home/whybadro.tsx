import { Button, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"

export default function WhyBadro() {
  return (
    <Grid p={1} py={8} rowGap={6} container alignItems="center" flexDirection="column">
      <Typography variant="h2" fontSize={32} color="secondary.main">
        چرا از پادرو استفاده کنیم؟
      </Typography>
      <Grid container ml="0">

      <SubjectContainer container mx="auto" pink item xs={12} md={7}>
        123
      </SubjectContainer>
      </Grid>
      <SubjectContainer container mx="auto" item xs={12} md={7}>
        123
      </SubjectContainer>
    </Grid>
  )
}

type SubjectContainerProps = {
  pink? : boolean;
}

const SubjectContainer = styled(Grid)<SubjectContainerProps>`
  background-color: ${p => p.pink ? "#FFF0E5" : "#E5F6FF"};
  border-radius: 59px;
  align-self: ${p => p.pink ? "flex-start" : "flex-end"};
`
