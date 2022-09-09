import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
  description: string;
  social: Array<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export class UISideBar extends React.Component<SidebarProps> {
  render() {
    const { description, social, title } = this.props;
    return (
      <Grid item xs={12} md={4}>
        <Paper elevation={2} sx={{ p: 3, bgcolor: 'grey.200' }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ p: 4 }}>
          Social
          {social.map(network => (
            <Link
              display="block"
              variant="body1"
              underline="none"
              href="#"
              key={network.name}
              sx={{ mb: 0.5 }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <network.icon />
                <span>{network.name}</span>
              </Stack>
            </Link>
          ))}
        </Typography>
      </Grid>
    );
  }
}
