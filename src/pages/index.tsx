import React, { Component } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';
import GlobalStyles from '@mui/material/GlobalStyles';

import { AppContext } from '../api';

import { UIHeader } from '../components/header/UIHeader';
import { Slider } from '../components/slider/UISlider';
import { UIFooter } from '../components/footer/UIFooter';

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
      { title: 'Home', url: '#', description: '' },
      { title: 'Showreel', url: '#', description: '' },
      { title: 'Contact', url: '#', description: '' }
    ];

    const SliderProps = {
      title: 'Title of a longer featured blog post',
      description:
        'Multiple lines of text that form the vn, informing new readers quickly and efficiently about whats most interesting in this posts contents.',
      image: 'https://source.unsplash.com/random',
      imageText: 'main image description',
      linkText: 'Continue reading…'
    };

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
            <Slider post={SliderProps} />
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
