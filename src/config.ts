export const durationPage: number = 0.5; // Animation between pages

export const drawerWidth: number = 240; // Width of drawer

export const isDarkColor = (isDarkTheme: boolean): {} => {
  if (isDarkTheme) {
    return {
      color: 'white',
    };
  }
  return {
    color: 'rgba(0,0,0,0.54)',
  };
};
