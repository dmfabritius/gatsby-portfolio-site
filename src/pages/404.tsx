import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  const Box = styled(MuiBox)`
    font-family: sans-serif;
    height: 100vh;
    background-color: #222;
    padding: 10vw;
  `;

  const Paper = styled(MuiPaper)`
    background-color: #333;
    color: #ccc;
    padding: 10vw;
  `;

  return (
    <Box>
      <Paper elevation={10}>
        <Grid container justifyContent="space-between" gap={5}>
          <Grid item>
            <Typography variant="h3" component="h1">
              Page not found
            </Typography>
            <Typography variant="h5" sx={{ marginTop: 5 }}>
              {'Return to the '}
              <Link href="/" variant="h5" underline="hover" color="primary">
                home page
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <StaticImage src="../../static/images/404.png" alt="404 error code" style={{ width: '33vw' }} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
