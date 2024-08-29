// @mui
import { Stack, Box } from '@mui/material';
// config
import { NAV } from '../../../config';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
// components
import Logo from '../../../components/logo';
import { NavSectionMini } from '../../../components/nav-section';
import { useAuthContext } from 'src/auth/useAuthContext';
import { checklength } from 'src/utils/flattenArray';
//
// import navConfig from './config';

// ----------------------------------------------------------------------

export default function NavMini() {
  const { navList } = useAuthContext();
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Logo sx={{ mx: 'auto', my: 2 }} />
        {checklength(navList) && <NavSectionMini data={navList} />}
      </Stack>
    </Box>
  );
}
