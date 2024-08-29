import { styled, useTheme } from '@mui/material/styles';
import { Typography, Card, Box, Divider, Grid } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import contact_hero from 'project-config.json';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';

const MainRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/contact/hero.jpg)',
  padding: theme.spacing(2, 1, 0, 1),
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0, 0, 0),
    height: `calc(100vh - 200px)`,
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(8, 0, 0, 0),
    height: `calc(100vh - 300px)`,
  },
}));
const StyledContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  borderRadius: '2px',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    width: '80%',
    position: 'absolute',
    transform: `translate(-50%, -25%)`,
    left: '50%',
    top: '50%',
  },
}));
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '2px',
  padding: theme.spacing(2),
  background: `${theme.palette.grey[200]}`,
  border: `0px`,
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(4, 3),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  return (
    <MainRoot>
      <StyledRoot>
        <HeroFloatCard />
      </StyledRoot>
    </MainRoot>
  );
}
function HeroFloatCard() {
  const { contact } = contact_hero;
  const theme = useTheme();
  const isMobile = useResponsive('down', 'md');
  return (
    <StyledContent>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="h2" fontWeight="normal" color={theme.palette.common.white}>
            Looking for something in particular?
          </Typography>
          <Typography
            variant="h4"
            fontWeight="normal"
            color={theme.palette.common.white}
            sx={{
              mt: 2,
            }}
          >
            We're here to help.
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
      </Box>
      <StyledCard
        sx={{
          marginTop: 12,
        }}
      >
        <Grid direction={{ xs: 'column', md: 'row' }} container spacing={2}>
          {contact.hero.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={3} xl={3}>
              <StyledCard>
                {!isMobile && <Iconify icon={item.icon} width={50} marginBottom={2} />}
                <Typography
                  variant={isMobile ? 'h6' : 'h6'}
                  fontWeight="bold"
                  fontFamily="'Roboto Slab', serif"
                  marginBottom={isMobile ? 1 : 2}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="body1"
                  component="a"
                  fontWeight="bold"
                  href={`mailto:${item.link}`}
                  color={`${theme.palette.primary.dark}`}
                >
                  {item.link}
                </Typography>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledCard>
    </StyledContent>
  );
}
