import React, { useState, CSSProperties } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MuiContainer from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/david-fabritius-resume.pdf', target: '_blank' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const Container = styled(MuiContainer)`
    height: 4rem;
    display: flex;
    align-items: center;
  `;

  const FlexBox = styled(Box)`
    display: flex;
    flex-direction: column;

    .MuiLink-root {
      margin: 0.5rem 2rem;
    }
  `;

  const Link = styled(MuiLink)`
    font-size: 1rem;
    margin-left: 3rem;
    padding: 0.25rem 1rem;
    border-radius: 2px;

    &:hover {
      color: ${theme.palette.background.default};
      background-color: ${theme.palette.primary.main};
    }
  `;

  const image: CSSProperties = {
    borderRadius: '25%',
    height: '3rem',
    width: '3rem',
    marginRight: 'auto',
  };

  return (
    <AppBar position="sticky" elevation={6}>
      <Container maxWidth="md">
        <StaticImage style={image} src="../../static/images/profile.jpg" alt="profile picture" />
        <Hidden smDown>
          {links.map((link) => {
            if (!link.target)
              return (
                <Link variant="button" underline="none" onClick={() => scrollTo(link.href)}>
                  {link.name}
                </Link>
              );
            else
              return (
                <Link href={link.href} target={link.target} variant="button" underline="none">
                  {link.name}
                </Link>
              );
          })}
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Container>
      <SwipeableDrawer open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} anchor="right">
        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderBottomWidth: '2px' }} />
        <FlexBox>
          {links.map((link) => (
            <Link
              href={link.href}
              target={link.target}
              variant="button"
              underline="none"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </FlexBox>
      </SwipeableDrawer>
    </AppBar>
  );
}
