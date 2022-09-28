import styled from "@emotion/styled";
import { Button, Grid, Link as MuiLink } from "@mui/material";
import Image from "next/image";
// import { NextLinkComposed } from "@src/Link";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Grid
      justifyContent="space-between"
      alignItems="center"
      container
      px={8}
      py={2}
      component="nav"
    >
      <Grid>
        <Image src="/logofa.svg" alt="logo" width={107} height={48} />
      </Grid>
      <Grid flexDirection="row-reverse" flexGrow={2} justifyContent="space-evenly" display="flex" alignItems="center">
        <NextLink passHref href="/">
          <Link>درباره ما</Link>
        </NextLink>
        <NextLink passHref href="/">
          <Link>سوالات متداول</Link>
        </NextLink>
        <NextLink passHref href="/">
          <Link>راهنمای استفاده</Link>
        </NextLink>
        <NextLink passHref href="/">
          <Link>تماس با ما</Link>
        </NextLink>
      </Grid>
      <Grid display="flex" alignItems="center">
        <Button sx={{ fontSize: "18px" }} variant="text">ورود</Button>
        <Button
          variant="contained"
          sx={{ color: "#fff", fontSize: "18px" }}
          className="orange-gradient"
        >
          ثبت نام
        </Button>
      </Grid>
    </Grid>
  );
}

const Link = styled(MuiLink)`
  color: #000;
  text-decoration: none;
  font-size: 20px;
`;
