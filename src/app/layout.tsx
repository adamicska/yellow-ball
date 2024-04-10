import "./globals.css";
import ContextProvider from "../context/ContextProvider";
import "./globals.css";
// import localFont from "next/font/local";
import TopNav from "../components/layout/TopNav";
import Footer from "../components/layout/FooterNav";

// const geoFont = localFont({
//   src: "../styles/",
//   variable: "--font-geo",
// });

export const metadata = {
  title: "YellowBall",
  description: "Join YellowBall Club to play tennis, meet new players, compete and earn!",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YellowBall Club",
  alternateName: "YellowBall",
  url: "https://www.yellowball.club/",
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
        <div className="static min-h-screen bg-white dark:bg-gray-800">
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
