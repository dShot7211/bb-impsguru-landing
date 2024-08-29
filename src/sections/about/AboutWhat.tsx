import { Grid, Container, Typography, styled } from '@mui/material';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  return (
    <StyledRoot>
      <Container>
        <Grid container>
          <Grid item>
            <Typography
              textAlign={'center'}
              variant="h4"
              fontWeight="normal"
              px={{ lg: 12, md: 12, sm: 2, xs: 2 }}
            >
              Good software is a work of art, and good art takes time. Our teams spend years
              mastering their craft in order to deliver exceptional products that customers love.
              Software isn't just our paycheck
            </Typography>
            <Typography
              textAlign={'center'}
              pt={4}
              sx={{
                fontSize: { xs: '32px', md: '62px' },
              }}
            >
              It's our speciality
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

// type ProgressItemProps = {
//   progress: {
//     label: string;
//     value: number;
//   };
// };

// function ProgressItem({ progress }: ProgressItemProps) {
//   const { label, value } = progress;
//   return (
//     <Box sx={{ mt: 3 }}>
//       <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
//         <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {fPercent(value)}
//         </Typography>
//       </Box>
//       <LinearProgress
//         variant="determinate"
//         value={value}
//         sx={{
//           '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
//           '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
//         }}
//       />
//     </Box>
//   );
// }
