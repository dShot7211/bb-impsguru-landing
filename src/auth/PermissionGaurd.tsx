import { m } from 'framer-motion';
import { Container, Typography } from '@mui/material';
import { MotionContainer, varBounce } from '../components/animate';
import { ForbiddenIllustration } from '../assets/illustrations';

// ----------------------------------------------------------------------

type PermissionGuardProp = {
  hasContent?: boolean;
  permission?: boolean;
  children: React.ReactNode;
};

export default function PermissionGaurd({
  hasContent = false,
  permission,
  children,
}: PermissionGuardProp) {
  if (!permission) {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Permission Denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not have permission to access this page
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    ) : null;
  }

  return <>{children}</>;
}
