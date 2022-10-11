import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export default function HeaderAboutUs() {
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      item
      xs={11}
      md={9}
      lg={7}
      p={4}
      mt={4}
      mb={6}
      container
    >
      <Title>
        درباره{" "}
        <Typography component="span" color="secondary.main">
          ما
        </Typography>
      </Title>
      <Grid item my={4} xs={12} md={9}>

      <Desc>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </Desc>
      </Grid>
    </Container>
  );
}

const Title = styled(Typography)`
  font-size: 40px;
  font-weight: bold;
  color: #000;
  span {
    font-size: 40px;
    font-weight: bold;
  }
  `;

const Desc = styled(Typography)`
text-align: center;
  font-size: 18px;
  color: #000;
`;

const Container = styled(Grid)`
  background: #e1f4ff;
  border-radius: 59px;
`;
