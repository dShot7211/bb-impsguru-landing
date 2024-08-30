import { Stack, Typography, TextField, Button } from '@mui/material';
import { m } from 'framer-motion';  
import { MotionViewport, varFade, varBounce } from 'src/components/animate';

const ContactForm = () => (


  <Stack
    component={MotionViewport}
    spacing={6}
    sx={{
      p: 4,
      maxWidth: 600,
      mx: 'auto',
      background: 'linear-gradient(135deg, #f5eef8, #FFF5EE)', 
      borderRadius: 2,
      boxShadow: 3,
    }}
  >
    <m.div variants={varFade().inUp} style={{ textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{ color: '#17202a', fontWeight: 'bold' }} 
      >
        Feel free to contact us.
        <br />
        We'll be glad to hear from you, buddy.
      </Typography>
    </m.div>

    <Stack spacing={4} sx={{ mt: 3 }}>
      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{
            borderRadius: 1,
            backgroundColor: '#ffffff', 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0BFB8', 
              },
              '&:hover fieldset': {
                borderColor: '#ab47bc', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#8e24aa',
              },
            },
          }}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{
            borderRadius: 1,
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0BFB8',
              },
              '&:hover fieldset': {
                borderColor: '#ab47bc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#8e24aa',
              },
            },
          }}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          sx={{
            borderRadius: 1,
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0BFB8',
              },
              '&:hover fieldset': {
                borderColor: '#ab47bc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#8e24aa',
              },
            },
          }}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Enter your message here."
          multiline
          rows={4}
          variant="outlined"
          sx={{
            borderRadius: 1,
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0BFB8',
              },
              '&:hover fieldset': {
                borderColor: '#E0BFB8',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#8e24aa',
              },
            },
          }}
        />
      </m.div>
    </Stack>

    <m.div variants={varBounce().in}>
      <Button
        size="large"
        variant="contained"
        sx={{
          backgroundColor: '#E0BFB8',
          color: '#fff',
          boxShadow: '0 3px 5px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#FFC0CB',
            transform: 'scale(1.05)',
            boxShadow: '0 5px 7px rgba(0,0,0,0.3)',
          },
        }}
      >
        Submit Now
      </Button>
    </m.div>
  </Stack>
);

export default ContactForm;
