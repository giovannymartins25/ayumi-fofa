import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desculpa Ayumi 💗",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`bg-pink-100 text-pink-800 min-h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
