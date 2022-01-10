import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const socials = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/david-fabritius-13691b4' },
  { icon: GitHubIcon, href: 'https://github.com/dmfabritius' },
  { icon: FacebookIcon, href: 'https://facebook.com/dmfabritius' },
];

interface Props {
  direction: 'column' | 'row';
}

export default function Socials({ direction }: Props) {
  return (
    <Grid container direction={direction} spacing={1}>
      {socials.map((social) => (
        <Grid item>
          <Link href={social.href} target="_blank">
            <IconButton>
              <social.icon fontSize="large" />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
