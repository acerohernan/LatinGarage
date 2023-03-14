import { UIKitProvider, light } from "@latingarage/uikit";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIKitProvider theme={light}>
      <Component {...pageProps} />;
    </UIKitProvider>
  );
}
