import React from 'react';
import { useTheme, styled, darken } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  links: {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    href: string;
  }[];
}

export default function Project({ title, description, imageUrl, tags, links }: Props) {
  const theme = useTheme();

  const Card = styled(MuiCard)`
    display: grid;
    grid-template-columns: 1fr auto;
  `;

  const Chip = styled(MuiChip)`
    color: ${theme.palette.secondary.light};
    background-color: ${darken(theme.palette.secondary.main, 0.5)};
    margin: 0.25rem;
  `;

  return (
    <Grid item>
      <Card>
        <Box>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Box sx={{ marginRight: 'auto' }}>
              {links.map((link) => (
                <IconButton href={link.href} target="_blank">
                  <link.icon />
                </IconButton>
              ))}
            </Box>
            <Box>
              {tags.map((tag) => (
                <Chip label={tag} color="secondary" />
              ))}
            </Box>
          </CardActions>
        </Box>
        <Hidden smDown>
          <CardMedia image={imageUrl} sx={{ width: '200px' }} />
        </Hidden>
      </Card>
    </Grid>
  );
}
