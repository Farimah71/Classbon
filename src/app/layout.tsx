import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

// Font configs //
const figtree = Figtree({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-figtree",
});
const yekanbakh = localFont({
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Regular.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Regular.woff",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
});
// Font configs //

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`${figtree.variable} ${yekanbakh.variable}`}>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-200 h-20 capitalize font-bold flex items-center justify-center">
          header
        </header>
        <div className="flex-1 flex">{children}</div>
        <footer className="bg-gray-200 h-20 capitalize font-bold flex items-center justify-center">
          footer
        </footer>
      </body>
    </html>
  );
}
