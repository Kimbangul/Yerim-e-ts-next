import { Lilita_One, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const fontLilita = Lilita_One({
  subsets: ['latin'],
  //variable: '--font-sans',
  display: 'swap',
  weight: '400',
});

export const fontPoppins = Poppins({
  subsets: ['latin'],
  //variable: '--font-sans',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const fontPretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 500 600 700',
  // variable: "--font-pretendard",
});

export const POPPINS = fontPoppins.style.fontFamily;

export const LILITA_ONE = fontLilita.style.fontFamily;

export const PRETENDARD = fontPretendard.style.fontFamily;
