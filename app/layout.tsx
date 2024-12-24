import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../static/PretendardGOVVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'ShinhanCard',
  description: 'ShinhanCard Frontend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
