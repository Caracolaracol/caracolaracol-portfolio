import localFont from 'next/font/local';

import '../globals.css'
import Providers from '../Providers';
import Image from 'next/image';


export const metadata = {
  title: 'Caracolaracol || Creative Developer',
  description: 'Portfolio of caracolaracol, web developer',
  generator: 'Caracolaracol',
  applicationName: 'Caracolaracol',
  referrer: 'origin-when-cross-origin',
  keywords: ['Caracolaracol', 'Developer', 'Portfolio'],
  authors: [{ name: 'Agustin' }, { name: 'Agustin', url: 'https://nextjs.org' }],
  creator: 'Agustin Rojas',
  publisher: 'Agustin Rojas',
}

const chronoType = localFont({
  src: '../../public/fonts/ChronoType.ttf',
  display: 'swap',
  variable:'--font-chrono',
  adjustFontFallback: 'Times New Roman',
  preload:false
});
const tommy = localFont({
  src: '../../public/fonts/MADE Tommy Soft Medium PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommy',
  preload:false
});
const tommyLight = localFont({
  src: '../../public/fonts/MADE Tommy Soft Light PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyLight',
  preload:false
});
const tommyRegular = localFont({
  src: '../../public/fonts/MADE Tommy Soft Regular PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyRegular',
  preload:false
});

export default function RootLayout({children}: {children: React.ReactNode}) {
 
  return (
    <html suppressHydrationWarning lang="en" className={`${chronoType.variable} ${tommy.variable} ${tommyLight.variable} ${tommyRegular.variable} `}>
      <body className='dark:background_noise_dark dark:text-snow text-black dark:bg-dark bg-snow'>
        <Providers>
          <div className="flex flex-col select-none h-screen justify-center ">
              {children}
          </div>
          <div className='absolute top-0 z-10 w-[100vw] h-screen background_noise'>
          </div>
        </Providers>
      </body>
    </html>
  )
}
