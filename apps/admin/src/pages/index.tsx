import { Button } from "@latingarage/uikit";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lating Garage App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Lating Garage</h1>
        <Button>Testing the styled theme</Button>
      </main>
    </>
  );
}
