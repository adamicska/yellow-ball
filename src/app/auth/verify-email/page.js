"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { Suspense, useState } from "react";

import Card from "../../../components/common/Card";
import LoaderButton from "../../../components/common/LoaderButton";
import Input from "@/components/common/Input";

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [confirmationCode, setCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const username = searchParams.get("user");

  async function resendConfirmationCode() {
    setError("");
    try {
      await resendSignUpCode({ username });
      setMessage("Code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  async function handleConfirmSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await confirmSignUp({ username, confirmationCode });
      router.push(`/auth/login?user=${username}`);
      setIsLoading(false);
    } catch (error) {
      console.log("error confirming sign up", error);
      setError("Error verifying code, please try again.");
      setIsLoading(false);
    }
  }
  return (
    <>
      <Card logo={true} title={"Verify Your Email Address"}>
        <Input
          type={"text"}
          id={"code"}
          value={confirmationCode}
          label={"Confirmation Code"}
          setHook={setCode}
          error={error}
        />
        {message.length ? (
          <div className="">
            <p className="text-b text-xs">{message}</p>
          </div>
        ) : (
          ""
        )}
        <LoaderButton
          isLoading={isLoading}
          text={"Verify"}
          handle={handleConfirmSignUp}
        />
      </Card>
      <Suspense>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Haven't received the code yet at {username}?
          <button
            onClick={(e) => resendConfirmationCode(e)}
            className="font-medium hover:underline"
          >
            Resend code.
          </button>
        </p>
      </Suspense>
    </>
  );
}
