import "./globals.css";
import { ReactNode } from "react";

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <head>
      
        <ColorSchemeScript />
      </head>
      <body>
       
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}