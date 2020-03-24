import React, { useState } from 'react';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Fab,
  Container,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ComputerIcon from '@material-ui/icons/Computer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Name from './components/Name';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button key={1}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button key={2}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem button key={3}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>Work Experience</ListItemText>
        </ListItem>
        <ListItem button key={4}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText>Side Projects</ListItemText>
        </ListItem>
        <ListItem button key={5}>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText>Hobbies</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fab
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </Fab>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <Container>
        <Name />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
      </Container>
    </div>
  );
}

export default App;
