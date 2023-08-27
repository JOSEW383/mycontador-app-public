import "@mantine/core/styles.css";
import "../styles/global.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import AuthProvider from 'components/login/NextAuthProvide.jsx';

export const metadata = {
  title: "My Contador",
  description: "Full control for your counter",
};

export default function RootLayout({ children, Session }) {
  const theme = {
    scale: 1.1,
  };

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          // defaultColorScheme={"light"}
        >
          <AuthProvider session={Session}>{children}</AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
