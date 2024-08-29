import { m } from 'framer-motion';
import { Typography, Stack, Grid, Divider } from '@mui/material';
import Image from '../../components/image';
import { varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <>
      <Image
        src="/assets/images/about/vision.jpg"
        alt="about-vision"
        sx={{ width: '100%', height: '70vh' }}
      />

      <Grid container spacing={12} px={{ lg: 12, xs: 4 }}>
        <Grid item lg={4}>
          <Stack sx={{ height: '20vh' }}>
            <Image src="/assets/images/about/vision.jpg" alt="about-vision" />
          </Stack>
          <Stack
            sx={{
              backgroundColor: '#f8f9fb',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: { xs: 0, md: 3 },
            }}
          >
            <Typography variant="h3" fontWeight="normal">
              Cutting-edge technology meets timeless values
            </Typography>
            <Divider orientation="horizontal" sx={{ color: 'primary.main' }} />
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Typography
            pt={{ lg: 6, md: 0, sm: 0, xs: 0 }}
            textAlign={'justify'}
            sx={{ fontWeight: '300' }}
            variant="h6"
          >
            We believe that software is the ultimate product of the hands and the mind. And we take
            pride in creating products and solutions that help solve business problems, anticipate
            needs, and discover opportunities to help you grow.
            <br />
            <br />
            Over the past 25 years, we've brought more than 55 products to the market. But, the R&D
            edge that drives this innovation isn't simple luck, it's the result of careful choice.
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography
            pt={{ lg: 6, md: 0, sm: 0, xs: 0 }}
            textAlign={'justify'}
            sx={{ fontWeight: '300' }}
            variant="h6"
          >
            We prefer to build things ourselves instead of growing our platform through acquisition.
            We invest more in customer support and product development than in sales and marketing.
            All that because we believe that's the best way to deliver choice and value to our
            customers.
            <br />
            <br />
            This kind of thinking isn't innovative. But in today's business climate, it is
            increasingly rare.
          </Typography>
        </Grid>
      </Grid>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="h4"
          fontWeight="normal"
          p={{ lg: 10, xs: 5 }}
          sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
        >
          Our vision is to be recognized as a leader in innovation, offering the best services to
          meet the diverse needs of our customers.
        </Typography>
      </m.div>
    </>
  );
}
