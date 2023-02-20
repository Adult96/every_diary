const color = {
  white: '#ffffff',
  light_white: '#eeeeee',
  dark_white: '#bdbdbd',
  pink: '#fe918d',
  dark_pink: '#ff6863',
  ligth_pink: '#fab1a0',
  dark_grey: '#4d4d4d',
  grey: '#616161',
  light_grey: '#7c7979',
  dark_blue: '#497da0',
  blue: '#73aace',
  dark_blue: '#413d53',
  deep_blue: '#262431',
  yellow: '#fff7d1',
  orange: '#feb546',
  black: '#000000',
  ligth_black: '#262626',
  dark_mint: '#25c79a',
  mint: '#54efc3',
  purple: '#6f48eb',
  trans: 'transparent',
};

// const fontSize = {
//   large: '3rem',
//   medium: '1.75rem',
//   regular: '1.125rem',
//   small: '1rem',
//   micro: '0.875rem',
// };

// const fontWeight = {
//   bold: 700,
//   semi_bold: 600,
//   regular: 400,
// };

// const borderRadius = {
//   round: '100%',
//   half_round: '50%',
//   large: '3rem',
//   medium: '1.5rem',
//   small: '0.5rem',
// };

const light = {
  bg: color.white,
  bgHover: color.light_white,
  text: color.black,
  borderColor: color.black,
  innerText: 'Light',
  bgBtnColor: color.light_white,
  bgInputColor: color.light_white,
};

const dark = {
  bg: color.deep_blue,
  bgHover: color.ligth_black,
  text: color.white,
  borderColor: color.light_grey,
  innerText: 'Dark',
  bgBtnColor: color.dark_blue,
  bgInputColor: color.dark_blue,
};

export const lightTheme = { ...light };
export const darkTheme = { ...dark };
