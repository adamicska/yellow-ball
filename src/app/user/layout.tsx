import FooterMobileNav from "@/components/layout/FooterMobileNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="static min-h-screen bg-white dark:bg-gray-800">
      {/* <TopNav /> */}
      {children}
      <FooterMobileNav />
    </div>
  );
}
