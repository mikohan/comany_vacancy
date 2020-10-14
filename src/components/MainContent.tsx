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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

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

export default function PersistentDrawerLeft() {
  const context = useContext(ThemeContext);

  const { isDarkMode, toggleTheme } = context;

  //   const handleToggle = () => console.log(isDarkMode, toggleTheme);
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

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Select stuff

  let { language, changeLanguage } = context;

  const { logoHome } = translateHeader[language];
  const { darkTheme, lightTheme } = translateHeader[language];
  // Theme switcher label
  const themeColor: string = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <Link to="/">{logoHome}</Link>
            </Typography>
            <div className={classes.menuItems}>
              <Link to="/frontend">
                <Button>FrontEnd</Button>
              </Link>
              <Link to="/somecontent">
                <Button>SomeContent</Button>
              </Link>
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
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
