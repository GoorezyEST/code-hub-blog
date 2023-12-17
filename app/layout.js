import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://code-hub.vercel.app/"),
  title: "Code Hub",
  description:
    "Un blog con el propósito de almacenar scripts, funciones, soluciones a errores, así como cualquier otra información relacionada con la programación, con el fin de tener un acceso más fácil a estos recursos. Además, esto me brinda la oportunidad de compartir mis conocimientos con otros desarrolladores.",
  openGraph: {
    title: "Code Hub",
    description:
      "Un blog con el propósito de almacenar scripts, funciones, soluciones a errores, así como cualquier otra información relacionada con la programación, con el fin de tener un acceso más fácil a estos recursos. Además, esto me brinda la oportunidad de compartir mis conocimientos con otros desarrolladores.",
    url: "https://code-hub.vercel.app/",
  },
  keywords: [
    "blog",
    "blog código",
    "programación",
    "tutorial código",
    "tutorial programación",
    "tutorial programacion",
    "tutorial codigo",
    "frontend tutorial",
    "tutorial frontend",
    "tutorial css",
    "blog frontend",
    "blog desarrollo",
    "Franco Espinosa",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
