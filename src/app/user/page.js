"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

export default function page() {
  const [user, setUser] = useState({});

  async function getUser() {
    const user = await getCurrentUser();
    console.log("user", user);
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);

  // If no profile, create profile with Formik, step profile (can skip)
  // Add logout to menu bar
  return <div className="min-h-screen">Hello {user.username}</div>;
}
