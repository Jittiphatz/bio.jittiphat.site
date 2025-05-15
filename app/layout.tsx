import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/ibm-plex-sans-thai';


export const metadata: Metadata = {
  title: "Jittiphat - Bio",
  description: "Jittiphat's bio website",
  icons: {
    icon: '/crayon.png', // ไฟล์ favicon.ico ใน public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
