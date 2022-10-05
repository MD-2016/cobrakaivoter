import { ChakraProvider } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { ColorModeScript, useColorMode } from '@chakra-ui/react';
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import "../styles/globals.css";
import NavBar from "../components/navbar";
import { AppProps } from "next/app";
import React from "react";
import About from '../pages/about';
import Home from "../pages/index";
import Vote from "../pages/vote";
import Results from '../pages/results';
import theme from '../styles/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleColorMode from "../components/darkModeButton";

function MyApp({ Component, pageProps }: AppProps) {
  const desc = "Pick the best fighter in the Cobra Kai and Karate Kid Verse";
  const title = "Best KK and CK fighter poll site";
  const imageMeta = "https://thekaratekid.fandom.com/wiki/Cobra_Kai_Dojo?file=Cobra_kai_logo_vector.svg";


  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NavBar />

    </ChakraProvider>
  );

}

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
