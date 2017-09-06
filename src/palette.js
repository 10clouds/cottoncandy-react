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
  button: '#597ce4',
  check: '#597ce4',
};

const RED = {
  base: '#ff3131',
};

const GRAY = {
  light: '#f0f2f5',
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
  menu: `0 0 25px 0 ${SECONDARY.base}`,
  button: '0 0 12px 0px rgba(124, 124, 124, 0.5)',
  toggle: '0 0 15px 0 #d6d6d6',
  placeholder: '0.2em 0 0 rgba(255,255,255,0.7), -0.2em 0 0 rgba(255,255,255,0.7)',
};

const BACKGROUND = {
  main: '#ffffff',
  gradient: `linear-gradient(to bottom, ${PRIMARY.light}, ${PRIMARY.dark})`,
  progressBar: '#ebeef4',
};

const TRANSITION = {
  main: '.3s ease-in-out',
};

const BORDER = {
  button: `1px solid ${PRIMARY.base}`,
  input: `1px solid ${SECONDARY.midDark}`,
};

export const style = {
  FONT,
  SHADOW,
  BACKGROUND,
  TRANSITION,
  BORDER
};
