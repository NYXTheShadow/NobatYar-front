import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "../components/rtl-provider";
import Header from "../components/Header";

import Fonts from "../components/fonts";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Fonts />
        <Header />
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
