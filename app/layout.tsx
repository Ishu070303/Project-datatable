"use client"

import { ChakraProvider } from "@chakra-ui/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: '#2b6cb0'}}>
      <ChakraProvider>
        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
