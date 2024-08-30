import { m } from 'framer-motion';
// @mui
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Grid, Container, Typography, BoxProps, Button } from '@mui/material';
// utils
import { filterStyles, textGradient, bgGradient } from '../../utils/cssStyles';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:before': {
    height: 2,
    bottom: -1,
    zIndex: 11,
    content: '""',
    width: '100%',
    position: 'absolute',
    backgroundColor: theme.palette.grey[900],
  },
}));

const StyledWrap = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: alpha(theme.palette.grey[500], 0.08),
}));

const StyledDescription = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: theme.spacing(10),
  ...bgGradient({
    startColor: `${theme.palette.background.default} 25%`,
    endColor: alpha(theme.palette.background.default, 0),
  }),
  [theme.breakpoints.up('md')]: {
    background: 'unset',
    position: 'unset',
    textAlign: 'left',
    padding: theme.spacing(25, 4, 25, 0),
  },
}));

const StyledContent = styled(m.img)(({ theme }) => ({
  minHeight: 560,
  [theme.breakpoints.up('md')]: {
    top: 1,
    zIndex: 8,
    minHeight: 'auto',
    position: 'absolute',
    boxShadow: `-40px 80px 80px ${
      theme.palette.mode === 'light'
        ? alpha(theme.palette.grey[500], 0.4)
        : theme.palette.common.black
    }`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeForRetailer() {
  return (
    <StyledRoot>
      <StyledWrap>
        <Container component={MotionViewport} sx={{ position: 'relative' }}>
          <Grid container>
            <Grid item md={6}>
              <Description />
            </Grid>

            <Grid item md={6}>
              <StyledContent
                src="/assets/images/home/for_retailers.svg"
                variants={varFade().inRight}
              />
            </Grid>
          </Grid>
        </Container>

        <TriangleShape />

        <TriangleShape anchor="bottom" />
      </StyledWrap>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <StyledDescription>
      <m.div variants={varFade().inLeft}>
        <Typography variant="h6" fontWeight="normal" color={theme.palette.common.black}>
          Consolidated Business Dashboard
        </Typography>
      </m.div>

      <m.div variants={varFade().inLeft}>
        <Typography
          variant="h2"
          sx={{
            mt: 0,
            mb: 3,
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          For Retailers
        </Typography>
      </m.div>
      <m.div variants={varFade().inLeft}>
        <Typography variant="h6" fontWeight="normal">
          Unlock actionable insights at your fingertips with our dynamic business dashboard – where
          relevant and real-time data is seamlessly provided, empowering you to make informed
          decisions with confidence.
        </Typography>
      </m.div>
      <m.div variants={varFade().inLeft}>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
          // onClick={() => push(PATH_DASHBOARD.root)}
          onClick={() => window.location.href = 'https://impsguru.com/login'}

          sx={{
            mt: 3,
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
            },
          }}
        >
          Go to Dashboard
        </Button>
      </m.div>
    </StyledDescription>
  );
}

// ----------------------------------------------------------------------

interface TriangleShapeProps extends BoxProps {
  anchor?: 'top' | 'bottom';
}

function TriangleShape({ anchor = 'top', ...other }: TriangleShapeProps) {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: 1,
        position: 'absolute',
        color: 'background.default',
        zIndex: { xs: 0, md: 9 },
        height: { xs: 40, md: 64 },
        ...filterStyles(
          `drop-shadow(320px 20px 80px ${
            isLight ? alpha(theme.palette.grey[700], 0.4) : theme.palette.common.black
          })`
        ),
        ...(anchor === 'bottom' && {
          zIndex: 9,
          bottom: 0,
          top: 'unset',
          color: 'grey.900',
          transform: 'scale(-1)',
          ...filterStyles('none'),
        }),
      }}
      {...other}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M1440 0H0L1440 64V0Z" fill="currentColor" />
      </svg>
    </Box>
  );
}
