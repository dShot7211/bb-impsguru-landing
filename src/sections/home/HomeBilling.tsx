import { m } from 'framer-motion';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button, Divider, Grid } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';

import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import PermissionGaurd from 'src/auth/PermissionGaurd';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.warning.light,
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 0),
  },
}));

const StyledRootCard = styled(Card)(({ theme }) => ({
  zIndex: 2,
  left: '50%',
  top: '-10px',
  width: '70%',
  borderRadius: '2px',
  position: 'absolute',
  padding: theme.spacing(5, 5),
  transform: 'translate(-50%, -50%)',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  [theme.breakpoints.down('md')]: {
    top: '0px',
    left: '0px',
    width: '90%',
    position: 'relative',
    transform: 'none',
    margin: '0px auto 50px auto',
  },
}));

const SpotLightText = styled(Typography)(({ theme }) => ({
  top: '0',
  left: '0',
  padding: theme.spacing(0.5, 2),
  fontSize: '12px',
  letterSpacing: '2px',
  position: 'absolute',
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
}));

const StyledDescription = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(15),
    borderRight: `1px dashed ${theme.palette.grey[800]}`,
  },
}));
const StyledStatement = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: "'Roboto Slab', serif",
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(15),
  },
}));
// ----------------------------------------------------------------------

export default function HomeBilling() {
  const theme = useTheme();
  const isMobile = useResponsive('down', 'md');

  return (
    <>
      {/* TOP ABSOLUTE CARD FOR TOP BILLING SERVICE MOBILE DEVICES */}
      <PermissionGaurd permission={isMobile}>
        <BillingCardComponent />
      </PermissionGaurd>
      <StyledRoot>
        {/* TOP ABSOLUTE CARD FOR TOP BILLING SERVICE WEB DEVICES */}
        <PermissionGaurd permission={!isMobile}>
          <BillingCardComponent />
        </PermissionGaurd>
        {/* INTRO OF ALL SERVICES COMBINED */}
        <Container component={MotionViewport}>
          <Grid direction={{ xs: 'column', md: 'row' }} container spacing={5}>
            <Grid item xs={12} md={7}>
              <Description />
            </Grid>
            <Grid item xs={12} md={5}>
              <Statement />
            </Grid>
          </Grid>
        </Container>

        {/* CARD BG ICON */}
        <Iconify
          icon="streamline:ai-technology-spark"
          sx={{
            width: 360,
            height: 360,
            opacity: 0.12,
            position: 'absolute',
            right: theme.spacing(-3),
            bottom: 0,
            color: '#000',
            zIndex: -1,
          }}
        />
      </StyledRoot>
    </>
  );
}

function BillingCardComponent() {
  const theme = useTheme();
  const { push } = useRouter();
  const isMobile = useResponsive('down', 'md');
  return (
    <Box component={MotionViewport}>
      <m.div variants={varFade().inDown}>
        <StyledRootCard>
          <SpotLightText>TOP BILLING</SpotLightText>
          <Stack
            sx={{
              alignItems: { md: 'center' },
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              '& .MuiStack-root': {
                mx: { xs: 0, md: 2 },
              },
            }}
          >
            {/* COL 1 */}
            <Stack flexDirection={'row'} alignItems="center">
              <Iconify icon="solar:wallet-money-bold" width={60} />
              <div>
                <Typography variant="body2" fontWeight="bold">
                  {process.env.REACT_APP_PROJECT_TITLE}
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  PAYOUT
                </Typography>
              </div>
            </Stack>
            <PermissionGaurd permission={!isMobile}>
              <Divider
                orientation="vertical"
                sx={{
                  height: '80px',
                  border: `1px dashed ${theme.palette.grey[800]}`,
                }}
              />
            </PermissionGaurd>
            {/* COL 2 */}
            <Stack>
              <Typography variant="h5" fontWeight="normal">
                Effortless financial transactions made seamless with our streamlined payout service.{' '}
              </Typography>
              <Button
                variant="contained"
                onClick={() => window.location.href = 'https://beta.impsguru.com/login'}

                // onClick={() => push(PATH_DASHBOARD.admin.root)}
                sx={{
                  width: '200px',
                  textAlign: 'left',
                  borderRadius: '2px',
                  mt: 1,
                  backgroundColor:'#0669f7'
                }}
                endIcon={<Iconify icon="line-md:chevron-right" />}
              >
                Try Now
              </Button>
            </Stack>
            {/* ICON */}
            <PermissionGaurd permission={!isMobile}>
              <Iconify
                icon="streamline:ai-technology-spark"
                sx={{
                  width: 120,
                  height: 120,
                  opacity: 0.12,
                  color: '#000',
                }}
              />
            </PermissionGaurd>
          </Stack>
        </StyledRootCard>
      </m.div>
    </Box>
  );
}

function Description() {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <StyledDescription>
      <m.div variants={varFade().inLeft}>
        <Typography variant="h6" fontWeight="normal" color={theme.palette.common.black}>
          Simplify Payments, Maximize Growth
        </Typography>
        <Typography variant="h2" fontWeight="normal" color={theme.palette.common.black}>
          {process.env.REACT_APP_PROJECT_TITLE}
        </Typography>
        <Typography variant="subtitle1" fontWeight="normal" color={theme.palette.common.black}>
          Combined solutions for all services
        </Typography>
        <Typography variant="h6" fontWeight="normal" mt={2}>
          Experience financial empowerment in one unified platform – where convenience meets
          comprehensive solutions, redefining your financial journey effortlessly.
        </Typography>
        <Button
          variant="contained"
          onClick={() => push(PATH_DASHBOARD.admin.root)}
          sx={{
            mt: 6,
            p: 2,
            width: '200px',
            textAlign: 'left',
            borderRadius: '2px',
            fontSize: '18px',
            fontWeight: 'normal',
            background: theme.palette.info.darker,
          }}
          endIcon={<Iconify icon="line-md:chevron-right" />}
        >
          Try {process.env.REACT_APP_PROJECT_TITLE}
        </Button>
      </m.div>
    </StyledDescription>
  );
}

function Statement() {
  return (
    <StyledStatement>
      <m.div variants={varFade().inRight}>
        <Iconify icon="el:quote-alt" width={40} />
        <Typography
          variant="h4"
          fontWeight="normal"
          fontFamily="'Roboto Slab', serif"
          marginTop={2}
        >
          Whether you're a local retailer, or a thriving enterprise, our platform is tailored to
          elevate your business operations – a seamless solution for every shop size.
        </Typography>
      </m.div>
    </StyledStatement>
  );
}
