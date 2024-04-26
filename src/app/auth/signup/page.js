"use client";
import { useState } from "react";
import { signUp } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Input from "@/components/common/Input";
import Card from "../../../components/common/Card";
import LoaderButton from "../../../components/common/LoaderButton";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setError("");
    if (!email.length) {
      setEmailError("Please fill in an email.");
      return;
    }
    if (!password.length) {
      setPassError("Please fill in a password.");
      return;
    }
    if (!terms) {
      setError("Please agree to our terms.");
    }
    if (email.length && password.length && terms) {
      setIsLoading(true);
      // Auth Signup
      try {
        const { userId } = await signUp({
          username: email,
          password,
          options: {
            userAttributes: {
              // name: username,
              email,
              // preferred_username: username,
            },
            // validationData,
          },
        });

        // console.log(userId);
        router.push(`/auth/verify-email?user=${email}`);

        setIsLoading(false);
      } catch (error) {
        console.log("error signing up:", error);
        setError(error.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  }

  return (
    <Card logo={true} title={"Signup"}>
      <Input
        type={"email"}
        id={"email"}
        value={email}
        label={"Email"}
        setHook={setEmail}
        error={emailError}
        required={true}
      />
      <Input
        type={"password"}
        id={"password"}
        value={password}
        label={"Password"}
        setHook={setPassword}
        error={passError}
        required={true}
      />
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border text-green-500 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-black dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-white dark:ring-offset-white"
            required
            value={terms}
            onChange={() => setTerms(!terms)}
          ></input>
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <Link
              className="font-medium text-black hover:underline dark:text-white"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>
      </div>
      {error.length ? (
        <div className="">
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      ) : (
        ""
      )}
      <LoaderButton
        isLoading={isLoading}
        text={"Signup"}
        handle={handleSignup}
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link href={"/auth/login"}>
          <span className="cursor-pointer font-medium text-black hover:underline dark:text-yellow-600">
            Login here
          </span>
        </Link>
      </p>
    </Card>
  );
}
