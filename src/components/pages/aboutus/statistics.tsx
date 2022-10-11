import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export default function StatisticsAboutus() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnGap={4}
      py={4}
      rowGap={4}
      my={4}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        background: "url('/about-us/bg.png')",
        backgroundSize: "cover",
        minHeight: "582px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        py={4}
        px={10}
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={46} color="secondary.main">
          +200
        </Typography>
        <Typography fontSize={26} color="#000">
          تعداد مشتریان ما
        </Typography>
      </Box>
      <Box
        py={4}
        px={10}
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={46} color="secondary.main">
          +200
        </Typography>
        <Typography color="#000" fontSize={26}>
          تعداد شرکت های پستی همکار
        </Typography>
      </Box>
      <Box
        py={4}
        px={10}
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={46} color="secondary.main">
          +200
        </Typography>
        <Typography color="#000" fontSize={26}>
          تعداد سفارشات در روز
        </Typography>
      </Box>
    </Grid>
  );
}

const Box = styled(Grid)`
  background: #e1f4ff78;
  backdrop-filter: blur(18px);
  border-radius: 30px;
`;
