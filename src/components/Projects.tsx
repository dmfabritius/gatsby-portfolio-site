import React from 'react';
import { projects } from '../utils/projects';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Project from './Project';

export default function Projects() {
  const Container = styled(MuiContainer)`
    height: 100%;
    margin-bottom: 20rem;
  `;

  return (
    <Container id="projects" maxWidth="md">
      <Typography variant="h4" sx={{ paddingTop: 8, marginBottom: 4 }}>
        Projects
      </Typography>
      <Grid container direction="column" spacing={4}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </Grid>
    </Container>
  );
}
