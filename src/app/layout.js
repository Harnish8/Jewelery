import {
  Cormorant_Garamond,
  Cinzel,
  Plus_Jakarta_Sans,
  Montserrat,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://grjewellers.co.in"),
  title: "GR Jewellers | Custom & Personalised Jewellery in Anand",
  description:
    "Discover custom and personalised heritage jewellery at GR Jewellers in Anand. Explore diamond, gold, silver and gemstone jewellery crafted with care.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${plusJakarta.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5X66Z6CL');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900 overflow-x-hidden selection:bg-stone-900 selection:text-amber-100">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5X66Z6CL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <WhatsAppWidget
          phoneNumber="919898891211"
          message="Hello GR Jewellers! I would like to inquire about custom jewellery."
          companyName="GR Jewellers"
        />
      </body>
    </html>
  );
}
