import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://devteamvietnam.github.io/bdigital.vn/"
      >
        Bdigital.vn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  social: Array<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export class UIFooter extends React.Component<FooterProps> {
  render(): React.ReactNode {
    const { description, social, title } = this.props;
    return (
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom sx={{ py: 0 }}>
            {social.map(network => (
              <Link
                display="block"
                variant="body1"
                underline="none"
                href="#"
                key={network.name}
                sx={{ mb: 2 }}
              >
                <Stack direction="row" justifyContent="center" spacing={2}>
                  <network.icon />
                  <span>{network.name}</span>
                </Stack>
              </Link>
            ))}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </Box>
    );
  }
}
