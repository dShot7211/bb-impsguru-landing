import NextLink from 'next/link';
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
import { PATH_PAGE } from '../../routes/paths';
import { _socials } from '../../_mock/arrays';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: `${process.env.REACT_APP_PROJECT_TITLE}`,
    // headline: "IMPS GURU",
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: 'https://impsguru.com/terms-conditions' },
      { name: 'Privacy Policy', href: 'https://impsguru.com/privacy-policy' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'impsguru@gmail.com', href: 'mailto:impsguru@gmail.com' },
      { name: 'Flat No. 8, Pocket 6, Sector 22, Rohini, Delhi, 110086', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const date = new Date().getFullYear();
  // const { pathname } = useRouter();

  // const isHome = pathname === '/';

  // const simpleFooter = (
  //   <Box
  //     component="footer"
  //     sx={{
  //       py: 5,
  //       textAlign: 'center',
  //       position: 'relative',
  //       bgcolor: 'background.default',
  //     }}
  //   >
  //     <Container>
  //       <Logo sx={{ mb: 1, mx: 'auto' }} />

  //       <Typography variant="caption" component="div">
  //         © All rights reserved
  //         <br /> made by &nbsp;
  //         <Link href="https://minimals.cc/"> minimals.cc </Link>
  //       </Typography>
  //     </Container>
  //   </Box>
  // );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Disclaimer: Any dispute arising under these terms and conditions shall be subject to
              the jurisdiction of the courts of Delhi.
            </Typography>

            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 5,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.name}>
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body2">
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © {date}. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
  // return isHome ? simpleFooter : mainFooter;
}
