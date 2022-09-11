import React, { Component } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';
import GlobalStyles from '@mui/material/GlobalStyles';

import { AppContext } from '../api';

import { UIHeader } from '../components/header/UIHeader';
import Swipeable from '../components/slider/UISlider';
import { UIFooter } from '../components/footer/UIFooter';
import { UIShowreel } from '../pages/showreel';
import { UIContact } from '../pages/contact';

export class UIPages extends Component {
  appContext: AppContext;

  constructor(props: any) {
    super(props);
    this.appContext = new AppContext(this);
  }

  render() {
    const theme = createTheme({
      components: {
        MuiCssBaseline: {
          styleOverrides: themeParam => ({
            body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null
          })
        }
      }
    });

    const sections = [
      { title: 'Home', url: '/bdigital.vn', description: '' },
      { title: 'Showreel', url: '/bdigital.vn/showreel', description: '' },
      { title: 'Contact', url: '/bdigital.vn/contact', description: '' }
    ];

    const footer = {
      title: 'Bdigital.vn',
      description: 'Design by ddthien',
      social: [{ name: 'Facebook', icon: FacebookIcon }]
    };
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
        />
        <CssBaseline enableColorScheme />
        <Container maxWidth="xl">
          <UIHeader sections={sections} title={'Bdigital'} />
          <main>
            <Swipeable />
          </main>
        </Container>
        <UIFooter
          title={footer.title}
          social={footer.social}
          description={footer.description}
        />
      </ThemeProvider>
    );
  }
}
