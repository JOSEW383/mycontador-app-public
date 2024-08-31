import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/global.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "MyContador",
  description: "Full control for your counter",
};

export default async function layout({
  children,
  Session,
}) {
  const theme = {
    scale: 1.1,
  };

  return (
    <html>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9118709018316369"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={"dark"}>
            <Notifications />
            {children}
            <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
