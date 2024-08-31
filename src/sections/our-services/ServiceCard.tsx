import { SxProps, styled, useTheme } from '@mui/material/styles';
import { Typography, Button, Stack, Card, Grid } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import project_data from 'project-config.json';
import { useRouter } from 'next/router';
interface StyledCardProps {
  theme?: SxProps;
  bgcolor?: string;
}
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(12, 0),
  },
}));
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '2px',
  padding: theme.spacing(1),
  background: `${theme.palette.common.white}`,
  border: `0px`,
  transition: 'border 0.3s, transform 0.3s, cursor 0.3s',
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1.5),
  },
  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-3px)',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
}));
const StyledInnerCard = styled(Card)<StyledCardProps>(({ theme, bgcolor }) => ({
  borderRadius: '2px',
  position: 'relative',
  padding: theme.spacing(2),
  background: bgcolor,
  border: `0px`,
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(4, 3),
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  py: 0,
  px: 1,
  top: '0',
  right: '0',
  fontSize: '12px',
  borderRadius: '0',
  fontWeight: 'normal',
  position: 'absolute',
  textTransform: 'uppercase',
  background: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

// ----------------------------------------------------------------------

export default function ServicesCard() {
  const isMobile = useResponsive('down', 'md');
  const { services } = project_data;
  const { push } = useRouter();
  return (
    <StyledRoot>
      {services?.length > 0 &&
        services.map((service, index) => (
          <Grid key={index} direction={{ xs: 'column', md: 'row' }} container spacing={4} mb={8}>
            <Grid item xs={12}>
              <Stack>
                <CardTitle title={service.title} />
              </Stack>
              <Stack>
                <CardSubTitle title={service.sub_title} />
              </Stack>
            </Grid>
            {service?.list?.length > 0 &&
              service.list.map((list, index) => (
                <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <StyledCard>
                    <StyledInnerCard bgcolor={list.bgcolor}>
                      {list.extra && <StyledButton>{list.extra}</StyledButton>}
                      <Iconify icon={list.icon} width={40} marginBottom={2} />
                      <Typography
                        variant={isMobile ? 'h6' : 'h4'}
                        fontWeight="bold"
                        fontFamily="'Roboto Slab', serif"
                        marginBottom={isMobile ? 1 : 0}
                        // textTransform="capitalize"
                      >
                        {list.title}
                      </Typography>
                      <Typography variant="body1" mb={3}>
                        {list.intro}
                      </Typography>
                      <m.div variants={varFade().inUp}>
                        <Button
                          size="medium"
                          variant="contained"
                          onClick={() => {
                            push(list.link);
                          }}
                          sx={{
                            backgroundColor: (theme) => theme.palette.common.black,
                            borderRadius: '3px',
                          }}
                          endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
                        >
                          TRY NOW
                        </Button>
                      </m.div>
                    </StyledInnerCard>
                  </StyledCard>
                </Grid>
              ))}
          </Grid>
        ))}
    </StyledRoot>
  );
}

function CardTitle({ title = '' }) {
  const theme = useTheme();
  return (
    <m.div variants={varFade().inRight}>
      <Typography variant="h3" fontWeight="normal" color={theme.palette.common.black}>
        {title}
      </Typography>
    </m.div>
  );
}
function CardSubTitle({ title = '' }) {
  const theme = useTheme();
  return (
    <m.div variants={varFade().inRight}>
      <Typography variant="h6" fontWeight="normal" color={theme.palette.common.black}>
        {title}
      </Typography>
    </m.div>
  );
}
