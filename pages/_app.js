import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "../components/rtl-provider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
