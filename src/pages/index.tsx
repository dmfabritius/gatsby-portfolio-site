import React from 'react';
import Helmet from 'react-helmet';
import '@fontsource/fira-sans-condensed';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Projects from '../components/Projects';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Fira Sans Condensed',
    },
    palette: {
      mode: 'dark',
    },
  }),
);

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>David Fabritius | Portfolio</title>
        <meta name="title" content="David Fabritius Portfolio" />
        <meta name="description" content="Personal portfolio web site for David Fabritius." />
      </Helmet>
      <CssBaseline />
      <Header />
      <Hero />
      <Projects />
    </ThemeProvider>
  );
}
