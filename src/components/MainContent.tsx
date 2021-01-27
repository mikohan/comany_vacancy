import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EmojiPeopleOutlined from '@material-ui/icons/EmojiPeopleOutlined';

import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import DevicesOtherOutlined from '@material-ui/icons/DevicesOtherOutlined';
import DnsOutlined from '@material-ui/icons/DnsOutlined';

// import useMediaQuery from '@material-ui/core/useMediaQuery';

// Select imports
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// End of select imports

import { useStyles } from '../styles/MainContextStyles';
import { FormControlLabel, Switch, Box } from '@material-ui/core';

import Routes from './Routs';
import { ThemeContext } from '../context/ThemeContext';

import { translateHeader } from '../translate/header';
import { isDrawerOpen } from '../config';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import { showBlog } from '../config';

export default function PersistentDrawerLeft(): JSX.Element {
  const context = useContext(ThemeContext);

  const { isDarkMode, toggleTheme } = context;

  // const themeMode: string = isDarkMode ? 'dark' : 'light';

  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode}`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode]
  );

  theme.typography.h3 = {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.4rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2rem',
    },
  };

  theme.typography.h4 = {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  };
  theme.typography.h6 = {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  };
  theme.typography.body1 = {
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.25rem',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(isDrawerOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Select stuff

  let { language, changeLanguage } = context;

  const { logoHome } = translateHeader[language];
  const {
    darkTheme,
    lightTheme,
    fullstack,
    linux,
    marketing,
    personality,
    certificates,
    blog,
    portfolio,
    frontend,
  } = translateHeader[language];
  // Theme switcher label
  const themeColor: string = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="inherit"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <MenuItem
              className={classes.menuItemLink}
              style={{ paddingTop: '15px' }}
            >
              <Link className={classes.menuItemLink} to="/">
                <HomeOutlined />
              </Link>
            </MenuItem>
            <Box className={classes.menuItems}>
              <MenuItem>
                <Link className={classes.menuItemLink} to="/fullstack">
                  {fullstack}
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.menuItemLink} to="/frontend">
                  {frontend}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuItemLink}>
                <Link className={classes.menuItemLink} to="/linux">
                  {linux}
                </Link>
              </MenuItem>
              {showMarketing && (
                <MenuItem className={classes.menuItemLink}>
                  <Link className={classes.menuItemLink} to="/marketing">
                    {marketing}
                  </Link>
                </MenuItem>
              )}
              <MenuItem className={classes.menuItemLink}>
                <Link className={classes.menuItemLink} to="/portfolio">
                  {portfolio}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuItemLink}>
                <Link className={classes.menuItemLink} to="/personality">
                  {personality}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuItemLink}>
                <Link className={classes.menuItemLink} to="/certificates">
                  {certificates}
                </Link>
              </MenuItem>
              {showBlog && (
                <MenuItem className={classes.menuItemLink}>
                  <Link className={classes.menuItemLink} to="/blog">
                    {blog}
                  </Link>
                </MenuItem>
              )}
            </Box>

            <div className={classes.grow}></div>
            <FormControlLabel
              label={themeColor}
              control={
                <Switch
                  id="#flag-icon"
                  onClick={toggleTheme}
                  size="small"
                  color="default"
                  aria-label={themeColor}
                />
              }
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={changeLanguage}
              >
                <MenuItem value="english">
                  <span role="img" aria-labelledby="#flag-icon">
                    🇺🇸
                  </span>
                  <span className={classes.languageSpan}>En</span>
                </MenuItem>
                <MenuItem value="russian">
                  <span role="img" aria-labelledby="#flag-icon">
                    🇷🇺
                  </span>
                  <span className={classes.languageSpan}>Ru</span>
                </MenuItem>
                <MenuItem value="czech">
                  <span role="img" aria-labelledby="#flag-icon">
                    🇨🇿
                  </span>
                  <span className={classes.languageSpan}>Cz</span>
                </MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link className={classes.drawerLink} to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary={logoHome} />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/fullstack">
              <ListItem button>
                <ListItemIcon>
                  <DnsOutlined />
                </ListItemIcon>
                <ListItemText primary={fullstack} />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/frontend">
              <ListItem button>
                <ListItemIcon>
                  <DevicesOtherOutlined />
                </ListItemIcon>
                <ListItemText primary={frontend} />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/linux">
              <ListItem button>
                <ListItemIcon>
                  <DevicesOtherOutlined />
                </ListItemIcon>
                <ListItemText primary={linux} />
              </ListItem>
            </Link>
            {showMarketing && (
              <Link className={classes.drawerLink} to="/marketing">
                <ListItem button>
                  <ListItemIcon>
                    <InsertChartOutlined />
                  </ListItemIcon>
                  <ListItemText primary={marketing} />
                </ListItem>
              </Link>
            )}
            <Link className={classes.drawerLink} to="/portfolio">
              <ListItem button>
                <ListItemIcon>
                  <EmojiPeopleOutlined />
                </ListItemIcon>
                <ListItemText primary={portfolio} />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link className={classes.drawerLink} to="/personality">
              <ListItem button>
                <ListItemIcon>
                  <SentimentSatisfied />
                </ListItemIcon>
                <ListItemText primary={personality} />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/certificates">
              <ListItem button>
                <ListItemIcon>
                  <FavoriteBorderOutlined />
                </ListItemIcon>
                <ListItemText primary={certificates} />
              </ListItem>
            </Link>
            {showBlog && (
              <Link className={classes.drawerLink} to="/blog">
                <ListItem button>
                  <ListItemIcon>
                    <DescriptionOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={blog} />
                </ListItem>
              </Link>
            )}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Routes />
        </main>
      </div>
    </ThemeProvider>
  );
}
