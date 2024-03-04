"use client";
import { Amplify } from "aws-amplify";
import Script from "next/script";
import awsconfig from "../amplifyconfiguration.json";
import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";

Amplify.configure({ ...awsconfig, ssr: true });

export default function ContextProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </AuthProvider>
    </>
  );
}
