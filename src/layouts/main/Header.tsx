// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, BoxProps } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Logo from '../../components/logo';
//
import NavMobile from './nav/mobile';
import navConfig from './nav/config';
import NavDesktop from './nav/desktop';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  console.log('theme', theme);
  const { push } = useRouter();
  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0, width: '100vw', left: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            px: { xs: 0, md: 8 },
          }}
        >
          <Logo
            sx={{
              width: '70%',
            }}
          />

          {/* <Link
            href={PATH_DOCS.changelog}
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ ml: 1 }}
          >
            <Label color="info"> v4.0.0 </Label>
          </Link> */}

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          <Button
            variant="contained"
            rel="noopener"
            // href={PATH_AUTH.login}
            onClick={() => window.location.href = 'https://beta.impsguru.com/login'}
            
            sx={{
              fontSize: isDesktop ? '' : '10px',
              py: isDesktop ? '' : '4px',
              px: isDesktop ? '' : '10px',
              backgroundColor:'#0669f7'
            }}
          >
            Login Now
          </Button>

          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
        </Box>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
