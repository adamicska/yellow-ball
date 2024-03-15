import "./globals.css";
import ContextProvider from "../context/ContextProvider";
import "./globals.css";
import localFont from "next/font/local";
import TopNav from "../components/layout/TopNav";
import Footer from "../components/layout/FooterNav";

// const geoFont = localFont({
//   src: "../styles/Geogrotesque_SemiBold.ttf",
//   variable: "--font-geo",
// });

export const metadata = {
  title: "BugZero's Operational Defect Database",
  description: "First database for all vendor operational defects and bugs",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BugZero's Operational Defect Database",
  alternateName: "ODD",
  url: "https://odd.findbugzero.com/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        {/* <div className={geoFont.variable}> */}
        <div className="static">
          {/* Create CC Provider with all the context state */}
          <ContextProvider>
            <TopNav />
            {children}
            <Footer />
          </ContextProvider>
          {/* Add Navigation */}
        </div>
      </body>
    </html>
  );
}
