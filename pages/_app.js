import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "../components/rtl-provider";
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Header />
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
