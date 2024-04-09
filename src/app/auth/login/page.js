"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, fetchAuthSession } from "aws-amplify/auth";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";

import Card from "../../../components/common/Card";
import LoaderButton from "../../../components/common/LoaderButton";
import Input from "../../../components/common/Input";

export default function Login() {
  const router = useRouter();

  const searchParams = useSearchParams();
  // const username = searchParams.get("user");

  const [user, setUser] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  // const [profile, setProfile] = useContext(ProfileContext);

  async function useUser() {
    try {
      const session = await fetchAuthSession();
      const t = session?.tokens?.idToken?.toString();
      setUser(t);
      console.log("session", t);
      return t;
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPassError("");
    const username = email;
    if (email?.length && password?.length) {
      setIsLoading(true);
      try {
        const login = await signIn({
          username,
          password,
        });

        useUser();
        router.push("/user");
      } catch (error) {
        setError(
          error.message === "User does not exist."
            ? "Incorrect username or password."
            : error.message
        );
        if (error.message === "There is already a signed in user.")
          router.push("/user");
        if (!error.message) setError("Error signing in.");
        setIsLoading(false);
      }
    }
    if (!email?.length) {
      setEmailError("Please fill in your email address");
    }
    if (!password?.length) {
      setPassError("Please fill in your password");
    }
  }

  return (
    <Card logo={true} title={"Login"}>
      <Input
        type={"email"}
        id={"email"}
        value={email}
        label={"Email"}
        setHook={setEmail}
        error={emailError}
        required={true}
        autoComplete="given-name"
      />

      <Input
        type={"password"}
        id={"password"}
        value={password}
        label={"Password"}
        setHook={setPassword}
        error={passError}
        required={true}
        autoComplete="off"
      />
      <div className="flex items-center justify-between">
        <Link href={"/auth/pass-reset"}>
          <p className="cursor-pointer text-sm font-medium text-black hover:underline">
            Forgot password?
          </p>
        </Link>
      </div>
      {error?.length ? (
        <div className="">
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      ) : (
        ""
      )}
      <LoaderButton
        isLoading={isLoading}
        text={"Login"}
        handle={handleSignIn}
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don&apos;t have an account yet?{" "}
        <Link href={"/auth/signup"}>
          <span className="cursor-pointer font-medium text-black dark:text-yellow-600 hover:underline">
            Sign up
          </span>
        </Link>
      </p>
    </Card>
  );
}
