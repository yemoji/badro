import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import HeaderHome from '@src/components/pages/home/Header';
import WhyBadro from '@src/components/pages/home/whybadro';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container container flexDirection="column">
      <HeaderHome />
      <WhyBadro />
    </Container>
  );
};

export default Home;

const Container = styled(Grid)``
