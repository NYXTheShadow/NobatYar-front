import { Heading } from "@chakra-ui/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>نوبت یار</title>
      </Head>
      <Heading mt={10} textAlign="center" size="2xl">
        به نوبت یار خوش آمدید
      </Heading>
    </>
  );
}
