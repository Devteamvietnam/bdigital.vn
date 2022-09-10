import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'city-lights',
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/813/588/839/special-effects-city-lights-artwork-electricity-wallpaper-preview.jpg'
  },
  {
    label: 'winter-snow',
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/870/315/584/winter-snow-night-house-wallpaper-preview.jpg'
  },
  {
    label: 'wp3648303',
    imgPath: 'https://wallpapercave.com/wp/wp3648303.jpg'
  },
  {
    label: '2050159',
    imgPath: 'https://wallpaperaccess.com/full/2050159.jpg'
  }
];

function Swipeable() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Paper
      elevation={24}
      square={true}
      sx={{
        position: 'relative',
        flexWrap: 'wrap',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <Grid container>
        <Grid md={12}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: 'block',
                      height: 490,
                      overflow: 'hidden',
                      width: '100%'
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Swipeable;
