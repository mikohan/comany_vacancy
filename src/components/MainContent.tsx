import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EmojiPeopleOutlined from '@material-ui/icons/EmojiPeopleOutlined';

import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import DevicesOtherOutlined from '@material-ui/icons/DevicesOtherOutlined';
import DnsOutlined from '@material-ui/icons/DnsOutlined';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// Select imports
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// End of select imports

import { useStyles } from '../styles/MainContextStyles';
import { FormControlLabel, Switch } from '@material-ui/core';

import Content from './Content';
import { ThemeContext } from '../context/ThemeContext';

import { translateHeader } from '../translate/header';
import { isDarkColor } from '../config';

export default function PersistentDrawerLeft() {
  const context = useContext(ThemeContext);

  const { isDarkMode, toggleTheme } = context;

  const themeMode: string = isDarkMode ? 'dark' : 'light';

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode}`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Select stuff

  let { language, changeLanguage } = context;

  const { logoHome } = translateHeader[language];
  const { darkTheme, lightTheme, frontEnd, backEnd } = translateHeader[
    language
  ];
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
            <MenuItem>
              <Typography variant="h6" noWrap>
                <Link
                  style={isDarkColor(isDarkMode)}
                  className={classes.menuItemLink}
                  to="/"
                >
                  {logoHome}
                </Link>
              </Typography>
            </MenuItem>

            <div className={classes.menuItems}>
              <MenuItem>
                <Link
                  style={isDarkColor(isDarkMode)}
                  className={classes.menuItemLink}
                  to="/frontend"
                >
                  {frontEnd}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuItemLink}>
                <Link
                  style={isDarkColor(isDarkMode)}
                  className={classes.menuItemLink}
                  to="/somecontent"
                >
                  {backEnd}
                </Link>
              </MenuItem>
            </div>

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

            <FormControl className={classes.formControl}>
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
                  <span className={classes.languageSpan}>English</span>
                </MenuItem>
                <MenuItem value="russian">
                  <span role="img" aria-labelledby="#flag-icon">
                    🇷🇺
                  </span>
                  <span className={classes.languageSpan}>Russian</span>
                </MenuItem>
                <MenuItem value="czech">
                  <span role="img" aria-labelledby="#flag-icon">
                    🇨🇿
                  </span>
                  <span className={classes.languageSpan}>Czech</span>
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
                  <EmojiPeopleOutlined />
                </ListItemIcon>
                <ListItemText primary="Introduction" />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/backend">
              <ListItem button>
                <ListItemIcon>
                  <DnsOutlined />
                </ListItemIcon>
                <ListItemText primary="Backend" />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/frontend">
              <ListItem button>
                <ListItemIcon>
                  <DevicesOtherOutlined />
                </ListItemIcon>
                <ListItemText primary="Frontend" />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/computers">
              <ListItem button>
                <ListItemIcon>
                  <FavoriteBorderOutlined />
                </ListItemIcon>
                <ListItemText primary="System Adm" />
              </ListItem>
            </Link>
            <Link className={classes.drawerLink} to="/marketing">
              <ListItem button>
                <ListItemIcon>
                  <FavoriteBorderOutlined />
                </ListItemIcon>
                <ListItemText primary="Marketing" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link className={classes.drawerLink} to="/personality">
              <ListItem button>
                <ListItemIcon>
                  <FavoriteBorderOutlined />
                </ListItemIcon>
                <ListItemText primary="Personality" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Content />
        </main>
      </div>
    </ThemeProvider>
  );
}
