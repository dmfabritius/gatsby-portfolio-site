import EditIcon from '@mui/icons-material/Edit';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const projects = [
  {
    title: 'Classic Asteroids Game',
    description: `A partial clone of the classic Asteroids arcade game created for
    educational purposes. A nearly identical version of the game using the same
    object-oriented programming structure was created six times in six different
    programming languages: C++, C#, Java, Python, JavaScript, and TypeScript.`,
    imageUrl: 'https://images.unsplash.com/photo-1572289758057-3e0f4327833b?w=400',
    tags: ['C++', 'C#', 'Java', 'Python', 'Javascript', 'Typescript'],
    links: [
      {
        icon: GitHubIcon,
        href: 'https://github.com/dmfabritius/Asteroids',
      },
      {
        icon: OpenInNewIcon,
        href: 'https://nd5wx.csb.app',
      },
      {
        icon: EditIcon,
        href: 'https://codesandbox.io/s/p5-typescript-asteriods-nd5wx',
      },
    ],
  },
  {
    title: 'File System Simulation',
    description: `A partial simulation of the ext2 file system written in C++. It is based
     on the code provided by Dr. K. C. Wang, professor of Computer Science/Engineering at
     Washington State University (WSU), in his book "Systems Programming in Unix/Linux" for
      the course CptS 360 Systems Programming C/C++.`,
    imageUrl: 'https://images.unsplash.com/photo-1576670158645-ef7b03134e32?w=400',
    tags: ['C++', 'ext2', 'Unix/Linux'],
    links: [
      {
        icon: GitHubIcon,
        href: 'https://github.com/dmfabritius/ext2sim',
      },
    ],
  },
  {
    title: 'FBLA Conference System',
    description: `A web app created for Washington State Future Business Leaders of America (FBLA)
       for creating, managing, and allowing students to register for conferences at the
       regional and state levels.`,
    imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
    tags: ['C#', 'ASP .NET', '.NET Framework', 'MSSQL'],
    links: [
      {
        icon: GitHubIcon,
        href: 'https://github.com/dmfabritius/fbla-conf-app',
      },
    ],
  },
  {
    title: 'Portfolio Web Site',
    description: 'My personal web site with links to selected github projects.',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    tags: ['Typescript', 'React', 'Gatsby', 'Material-UI'],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/dmfabritius/gatsby-portfolio-site"
      },
      {
        icon: EditIcon,
        href: "https://codesandbox.io/s/gatsby-portfolio-site-2mv2e"
      },
    ],
  },
];
