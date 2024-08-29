import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Focus on Safety & Security',
    description:
      'Embark on a secure financial journey with us, where our paramount commitment is a Focus on Safety & Security. Your peace of mind is our priority as we leverage state-of-the-art measures to safeguard your financial transactions and information, ensuring a trusted and protected experience at every step.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Focus on Better Services',
    description:
      'Experience a transformative era in finance with our billing and banking payout software, embodying a commitment to Focus on Better Services through cutting-edge solutions and unwavering customer dedication.',
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Transparent Billing Integrity',
    description:
      'Upholding trust through clear and honest billing practices, ensuring accuracy and fairness in every financial transaction',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/background/overlay_2.svg), url(/assets/images/home/core_values_2.jpg)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '2px',
  padding: theme.spacing(4, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function CoreValues() {
  const theme = useTheme();
  return (
    <StyledRoot>
      <Box component={MotionViewport}>
        <Stack
          spacing={1}
          sx={{
            width: { md: 600 },
            m: '0 auto',
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" fontWeight="normal" color={theme.palette.common.white}>
              The Core principles and values that drive us
            </Typography>
          </m.div>
        </Stack>

        <StyledCard
          sx={{
            m: '0 auto',
            width: { xs: '95%', md: '80%' },
            boxShadow: (theme) => ({
              md: `-40px 40px 80px ${
                theme.palette.mode === 'light'
                  ? alpha(theme.palette.grey[500], 0.16)
                  : alpha(theme.palette.common.black, 0.4)
              }`,
            }),
          }}
        >
          <Box
            gap={{ xs: 3, lg: 10 }}
            display="grid"
            alignItems="flex-start"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
          >
            {CARDS.map((card, index) => (
              <m.div variants={varFade().inUp} key={card.title}>
                <>
                  <Image src={card.icon} alt={card.title} sx={{ mx: '0', width: 48, height: 48 }} />

                  <Typography
                    variant="h4"
                    fontFamily="'Roboto Slab', serif"
                    fontWeight="bold"
                    textAlign="left"
                    sx={{ mt: 4, mb: 2 }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="h6" fontWeight="normal" textAlign="left">
                    {card.description}
                  </Typography>
                </>
              </m.div>
            ))}
          </Box>
        </StyledCard>
      </Box>
    </StyledRoot>
  );
}
