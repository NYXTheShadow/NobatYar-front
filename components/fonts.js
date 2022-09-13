import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Shabnam';
        src: url('./fonts/Shabnam.woff') format('woff');
     }

      @font-face {
        font-family: 'Shabnam Bold';
        src: url('./fonts/Shabnam-Bold.woff') format('woff');
      }
   `}
  />
);

export default Fonts;
