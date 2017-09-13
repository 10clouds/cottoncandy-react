const PRIMARY = {
  light: '#6f8aee',
  base: '#5a79e6',
  midDark: '#5973e7',
  dark: '#4862e1',
};

const SECONDARY = {
  light: '#ebeff5',
  base: '#ebebeb',
  midDark: '#ccd5f8',
  dark: '#758092',
};

const TYPOGRAPHY = {
  main: '#39393b',
  heading: '#202020',
};

const RED = {
  base: '#ff3131',
};

const GRAY = {
  white: '#ffffff',
  light: '#f0f2f5',
  midLight: '#d6d6d6',
  base: '#c2c8d0',
  dark: '#757575',
  black: '#000000',
};

export const palette = {
  PRIMARY,
  SECONDARY,
  TYPOGRAPHY,
  RED,
  GRAY,
};

const FONT = {
  main: 'Poppins',
  heading: 'Poppins',
};

const SHADOW = {
  main: `0 0 15px 0 ${SECONDARY.base}`,
  big: `0 0 25px 0 ${SECONDARY.base}`,
  dark: `0 0 15px 0 ${GRAY.midLight}`,
  light: '0 0 12px 0px rgba(124, 124, 124, 0.5)',
  white: '0.2em 0 0 rgba(255,255,255,0.7), -0.2em 0 0 rgba(255,255,255,0.7)',
  outline: `0 0 3pt 2pt ${PRIMARY.light}`,
};

const BACKGROUND = {
  main: GRAY.white,
  gradient: `linear-gradient(to bottom, ${PRIMARY.light}, ${PRIMARY.dark})`,
};

const TRANSITION = {
  main: '.3s ease-in-out',
};

const BORDER = {
  main: `1px solid ${PRIMARY.base}`,
  alt: `1px solid ${SECONDARY.midDark}`,
};

export const style = {
  FONT,
  SHADOW,
  BACKGROUND,
  TRANSITION,
  BORDER
};
