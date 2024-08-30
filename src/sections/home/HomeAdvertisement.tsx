import { m } from 'framer-motion';
import { useTheme, styled } from '@mui/material/styles';
import { Button, Box, Container, Stack } from '@mui/material';
import { bgGradient } from '../../utils/cssStyles';
import { PATH_DASHBOARD } from '../../routes/paths';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { useRouter } from 'next/router';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: `url('/assets/background/overlay_4.jpg')`,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

export default function HomeAdvertisement() {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            ...bgGradient({
              direction: '135deg',
              startColor: theme.palette.common.white,
              endColor: theme.palette.primary.lighter,
            }),
            borderRadius: 2,
            pb: { xs: 5, md: 0 },
          }}
        >
          {isDesktop && <Content />}
          <Description />
        </Stack>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  const { push } = useRouter();
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{
          color: 'common.black',
          mb: isDesktop ? 1 : 1,
          mt: isDesktop ? 0 : 3,
          typography: isDesktop ? 'h2' : 'h4',
          fontWeight: 'normal',
        }}
      >
        Ready to earn your best?
      </Box>
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{
          color: 'text.primary',
          mb: isDesktop ? 5 : 3,
          mt: isDesktop ? 0 : 1,
          typography: isDesktop ? 'h3' : 'h5',
          fontWeight: 'normal',
        }}
      >
        Let's get you started.
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size={isDesktop ? 'large' : 'small'}
            variant="contained"
            // onClick={() => push(PATH_DASHBOARD.admin.root)}
            onClick={() => window.location.href = 'https://beta.impsguru.com/login'}
            sx={{
              color: 'grey.100',
              bgcolor: 'primary.main',
            }}
          >
            Login Now
          </Button>
        </m.div>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Stack
      component={m.div}
      variants={varFade().inUp}
      alignItems="center"
      sx={{
        p: 3,
      }}
    >
      <m.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="rocket"
          src="/assets/images/home/banking_services.jpg"
          sx={{ width: 360, height: 'auto' }}
        />
      </m.div>
    </Stack>
  );
}
