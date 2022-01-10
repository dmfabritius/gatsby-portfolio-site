import React, { useState, useEffect } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiContainer from '@mui/material/Container';
import MuiGrid from '@mui/material/Grid';
import MuiPaper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Socials from './Socials';

export default function Hero() {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => setShow(true), 250);
  }, []);

  const Paper = styled(MuiPaper)`
    height: max(400px, 80vh);
    background-image: url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2');
    background-size: cover;
    background-position: center;
    background-color: rgb(0 0 80 / 0.6);
    background-blend-mode: overlay;
  `;

  const Container = styled(MuiContainer)`
    height: 100%;
    position: relative;
  `;

  const GridContainer = styled(MuiGrid)`
    height: 100%;
  `;

  const SocialHorizontal = styled(MuiGrid)`
    margin-top: ${theme.spacing(3)};
  `;

  const CallToAction = styled(MuiButton)`
    font-size: 1.1rem;
    margin: ${theme.spacing(4)} 0;

    &:hover {
      color: ${theme.palette.background.default};
      background-color: ${theme.palette.secondary.main};
    }
  `;

  const PhotoCredit = styled(Box)`
    position: absolute;
    bottom: 0;
    right: 0.5rem;
  `;

  return (
    <Paper>
      <Container id="about" maxWidth="md">
        <GridContainer container justifyContent="space-between" alignItems="center">
          <Fade in={show} timeout={1500}>
            <MuiGrid item sm={8}>
              <Typography component="h1" variant="h2" sx={{ paddingTop: 8, marginBottom: 3 }}>
                David Fabritius
              </Typography>
              <Typography component="h2" variant="h5">
                World's greatest software developer for the 8th consecutive year with over 13 decades of experience in
                exaggerating as well as being better looking than anyone has the right to be. Not available for birthday
                parties.
              </Typography>
              <Hidden smUp>
                <SocialHorizontal item>
                  <Socials direction="row" />
                </SocialHorizontal>
              </Hidden>
              <Link href="https://www.linkedin.com/in/david-fabritius-13691b4">
                <CallToAction variant="outlined" color="secondary" size="large">
                  Contact Me
                </CallToAction>
              </Link>
            </MuiGrid>
          </Fade>
          <Hidden smDown>
            <MuiGrid item>
              <Socials direction="column" />
            </MuiGrid>
          </Hidden>
        </GridContainer>
        <PhotoCredit>
          <Typography variant="caption" fontStyle="italic">
            {'Photo by '}
            <Link href="https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Fotis Fotopoulos
            </Link>
            {' on '}
            <Link href="https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </Link>
          </Typography>
        </PhotoCredit>
      </Container>
    </Paper>
  );
}
