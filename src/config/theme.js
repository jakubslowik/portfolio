// the boldest font
const fontStack_1_arr = [
  'GilroyBold',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];

// medium weight font
const fontStack_2_arr = [
  'GilroyMedium',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];

// // light weight font
// const fontStack_3_arr = [
//   'GilroyLight',
//   'Helvetica Neue',
//   'Segoe UI',
//   'Helvetica',
//   'Arial',
//   'sans-serif',
// ];

const fontStack_3_arr = fontStack_2_arr;

// for usage in css (array joined to string)
const fontStack_1 = fontStack_1_arr.join();
const fontStack_2 = fontStack_2_arr.join();
const fontStack_3 = fontStack_3_arr.join();


const typography = {
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 4.5,
  headerFontFamily: fontStack_1_arr,
  bodyFontFamily: fontStack_2_arr,
};

const colors = {
  colorPrimary: `#341f7d`,
  colorPrimaryLight: `#5963ff`,
};

const shadows = {
  button: {
    default: '0 4px 10px rgba(0, 0, 0, 0.25)',
    hover: '0 2px 6px rgba(0, 0, 0, 0.10), 0 4px 15px rgba(0, 0, 0, 0.10)',
  },
  input: {
    default: '0 2px 6px rgba(0, 0, 0, 0.05)',
    hover: '0 0 5px rgba(255,255,255, 1), 0 2px 6px rgba(0, 0, 0, 0.15)',
    focus: '0 0 5px rgba(255,255,255, 1), 0 0 15px white, 0 5px 15px rgba(0, 0, 0, 0.2)',
  },
};

const breakpoints = {
  xs: '400px',
  s: '600px',
  m: '900px',
  l: '1200px',
  xl: '2100px',
};

const theme = {
  fontStack_1,
  fontStack_2,
  fontStack_3,
  typography,
  colors,
  shadows,
  breakpoints,
  // helper function to quickly calculate rhythm spacing
  rhythm: function(multiplier) {
    return `${multiplier * typography.baseLineHeight}rem`;
  },
};

export default theme;
