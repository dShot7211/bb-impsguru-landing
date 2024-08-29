import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Stack, Grid, Container } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import useResponsive from 'src/hooks/useResponsive';
import { bgGradient } from '../../utils/cssStyles';
import HomeUserCounter from 'src/components/home/HomeUserCounter';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  margin: theme.spacing(10, 0, 0, 0),
  position: 'relative',
  ...bgGradient({
    color: alpha(theme.palette.primary.main, 0.7),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 0),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5),
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingTop: theme.spacing(15),
  },
}));

const StyledRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': {
    margin: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(2.5),
    },
  },
}));
// ----------------------------------------------------------------------

export default function HomeCount() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid direction={{ xs: 'column', md: 'row' }} container spacing={5}>
          <Grid item xs={12} md={6}>
            <Description />
          </Grid>

          <Grid item xs={12} md={6}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

function Description() {
  const theme = useTheme();
  const isMobile = useResponsive('down', 'md');
  return (
    <StyledDescription>
      <m.div variants={varFade().inRight}>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          fontWeight="normal"
          color={theme.palette.common.white}
        >
          Made in India
        </Typography>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          fontWeight="normal"
          color={theme.palette.common.white}
        >
          Made for the Businesses
        </Typography>
      </m.div>
      <m.div variants={varFade().inRight}>
        <Stack
          mt={6}
          sx={{
            px: { xs: 5, md: 0 },
          }}
        >
          <Grid direction={{ xs: 'column', md: 'row' }} container spacing={isMobile ? 2 : 5}>
            <Grid item xs={12} md={6}>
              <HomeUserCounter
                countTo={5}
                duration={1000}
                unit="K+"
                color={theme.palette.common.white}
                subValue="Merchants"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HomeUserCounter
                countTo={10}
                duration={1000}
                unit="L+"
                color={theme.palette.common.white}
                subValue="Customers"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HomeUserCounter
                countTo={5}
                duration={1000}
                unit="K+"
                color={theme.palette.common.white}
                subValue="City"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HomeUserCounter
                countTo={5}
                duration={1000}
                unit="L+"
                color={theme.palette.common.white}
                subValue="Transaction"
              />
            </Grid>
          </Grid>
        </Stack>
      </m.div>
    </StyledDescription>
  );
}

// ----------------------------------------------------------------------

function Content() {
  const isMobile = useResponsive('down', 'md');

  return (
    <StyledContent>
      {/* Row 1 */}
      <StyledRow>
        <m.div variants={varFade().inLeft}>
          <Image src="/assets/illustrations/illustration_home_services.jpg" alt="services" />
          <Stack flexDirection={isMobile ? 'column' : 'row'} alignItems="center" marginTop={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontFamily="'Roboto Slab', serif"
              marginTop={2}
              color="common.black"
            >
              Since embracing our neo banking platform, our financial management has soared,
              witnessing an impressive 80% boost in productivity over the past year.
            </Typography>
          </Stack>
        </m.div>
      </StyledRow>
    </StyledContent>
  );
}
