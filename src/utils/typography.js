import Typography from 'typography';
import fairyGateTheme from 'typography-theme-fairy-gates';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['600']
    },
    {
      name: 'Quattrocento Sans',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Quattrocento Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '600',
  bodyWeight: 400,
  boldWeight: 700
});

export const { scale, rhythm, options } = typography;
export default typography;
