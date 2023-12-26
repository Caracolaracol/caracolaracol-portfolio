'use client'


import { Provider } from "jotai"
import { ThemeProvider } from "next-themes"
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ThemeProvider attribute="class" defaultTheme='dark'>
        <MDXProvider>
          <MDXEmbedProvider>
            {children}
          </MDXEmbedProvider>
        </MDXProvider>
      </ThemeProvider>
    </Provider>
  )
}
