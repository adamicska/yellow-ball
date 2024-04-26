"use client";
import { useContext, useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { AuthContext } from "../../context/AuthContext";

import FooterMobileNav from "@/components/layout/FooterMobileNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useContext(AuthContext);

  async function getUser() {
    const user = await getCurrentUser();
    // console.log("user", user);
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="static min-h-screen bg-white dark:bg-gray-800">
      <div className="pt-20 px-4">{children}</div>
      <FooterMobileNav userId={user.userId} />
    </div>
  );
}
