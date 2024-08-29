import { styled, useTheme } from '@mui/material/styles';
import { Typography, Box, Divider, Button, Stack } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import project_data from 'project-config.json';

const MainRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: 'max-content',
  },
}));
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2, 1, 2, 1),
  // height: '80vh',
  backgroundColor: '#fff3b0',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0, 8, 0),
  },
}));
const StyledContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  borderRadius: '2px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  [theme.breakpoints.up('md')]: {},
}));

// ----------------------------------------------------------------------

export default function ServicesHero() {
  return (
    <MainRoot>
      <StyledRoot>
        <HeroFloatCard />
      </StyledRoot>
    </MainRoot>
  );
}
function HeroFloatCard() {
  const theme = useTheme();
  const {
    ourservices: { hero },
  } = project_data;
  const isMobile = useResponsive('down', 'md');

  return (
    <StyledContent>
      <m.div variants={varFade().inRight}>
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          fontWeight={isMobile ? 'normal' : 'bold'}
          color={theme.palette.common.black}
          sx={{
            mb: 1,
            textTransform: 'uppercase',
          }}
        >
          {hero?.sub_title}
        </Typography>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          fontWeight="bold"
          color={theme.palette.common.black}
        >
          {hero?.title}
        </Typography>
        <Typography
          variant={isMobile ? 'caption' : 'h6'}
          fontWeight="normal"
          color={theme.palette.common.black}
          sx={{
            width: { xs: '100%', md: '60%' },
            margin: '32px auto',
            px: { xs: 0, md: 5 },
            lineHeight: { md: '2rem' },
          }}
        >
          {hero?.intro}
        </Typography>
        <Divider
          sx={{
            border: `1px solid ${theme.palette.info.main}`,
            display: 'block',
            width: '100px',
            margin: '0 auto',
            mt: 2,
          }}
        />
      </m.div>
      <Stack
        flexDirection={isMobile ? 'row' : 'row'}
        alignItems="center"
        justifyContent="center"
        // spacing={isMobile ? 2 : 0}
        mt={isMobile ? 2 : 4}
      >
        <Stack>{loginbutton}</Stack>
        <Stack ml={isMobile ? 3 : 3}>{contactusbutton}</Stack>
      </Stack>
    </StyledContent>
  );
}

const contactusbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="outlined"
      sx={{
        color: (theme) => theme.palette.common.black,
        borderRadius: '2px',
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Contact Us
    </Button>
  </m.div>
);
const loginbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="contained"
      sx={{
        backgroundColor: (theme) => theme.palette.common.black,
        borderRadius: '2px',
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Login now
    </Button>
  </m.div>
);
