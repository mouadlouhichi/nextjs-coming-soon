import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center blurry-bg  bg-cover">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Morovento | "
      />
      <meta property="og:title" content={`${title} | Morovento`} />
      <meta
        property="og:description"
        content="Slioth - is a One Page Saas Lading Page build with Tailwind CSS and NextJs created by themeptation"
      />
      <meta property="og:url" content="https://www.morovento.com/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
