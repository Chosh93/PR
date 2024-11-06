import React, {ReactElement, ReactNode} from "react";

import type { NextPage } from "next";

import type { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
