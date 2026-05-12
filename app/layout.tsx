import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/section/Navbar";
import Container from "@/components/Container";
import Background from "@/components/Background";
import Footer from "@/components/section/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface-a0 scroll-smooth">
      <body
        className={`${poppins.className} font-sans antialiased text-white select-none`}
      >
        <Navbar />
        <Background>
          <Container>{children}</Container>
        </Background>
        <Footer />
      </body>
    </html>
  );
}
