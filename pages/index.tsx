import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import HeaderHome from '../src/components/pages/home/Header';

const Home: NextPage = () => {
  return (
    <Container container flexDirection="column">
      <HeaderHome />
    </Container>
  );
};

export default Home;

const Container = styled(Grid)``
