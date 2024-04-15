import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "./ui/layout/Background";
import { Navbar } from "./ui/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medilatam",
  description: "Tu portal de salud en América Latina. Conectamos a pacientes con profesionales médicos, ofreciendo consultas virtuales, herramientas de seguimiento y acceso a información médica confiable. Tu guía para una salud óptima en la región",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.svg" />
      <body className={`bg-slate-200 ${inter.className}`}>
        <header>
          <Background />
        </header>
        <section className=" fixed w-[300px] h-[550px] p-4 ml-6 -mt-60 bg-white rounded-xl shadow-2xl box-content">
          <Navbar />
        </section>
        {children}
      </body>
    </html >
  );
}
