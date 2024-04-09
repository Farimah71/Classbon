import "./globals.css";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

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
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${yekanbakh.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:text-base-content dark:bg-base-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
