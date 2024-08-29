// @mui
import { Box, Typography, Grid, Avatar, Button } from '@mui/material';
// components

import aboutUsData from 'project-config.json';

export default function AboutValues() {
  const aboutus = aboutUsData.about;

  return (
    <>
      <Box sx={{ backgroundColor: '#f8f9fb' }} p={{ lg: 8, xs: 4 }} alignSelf={'center'} m={2}>
        <Typography textAlign={'center'} variant="h1" pt={2}>
          Our Values
        </Typography>
        <Typography textAlign={'center'} variant="body1" pt={2} sx={{ fontWeight: '100' }}>
          Our values guide everything we do: how we create our
          <br /> product, and how we operate as a team.
        </Typography>
        <Grid container px={{ lg: 32, md: 12 }} pt={8} spacing={6}>
          {aboutus.map((about, index) => (
            <Grid item lg={6} key={index}>
              <Avatar
                sx={{
                  bgcolor: '#fff',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  height: '60px',
                  width: '60px',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: '800', color: 'primary.main' }}>
                  {about.id}
                </Typography>
              </Avatar>
              <Typography variant="h4" pt={2} sx={{ fontWeight: '800', color: 'primary.main' }}>
                {about.title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: '400' }}>
                {about.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box p={{ lg: 8, xs: 4 }} alignSelf={'center'} m={2}>
        <Grid container px={{ lg: 12, md: 12 }} pt={8} spacing={6}>
          <Grid item lg={6}>
            <Typography sx={{ color: 'primary.main' }} variant="h2">
              Get Started
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: '100' }}>
              Download {process.env.REACT_APP_PROJECT_TITLE} for free on the Google Play
              <br /> stores – or sign up online today.
            </Typography>
          </Grid>
          <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button variant="contained" sx={{ bgcolor: 'primary.main' }} size="large">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
