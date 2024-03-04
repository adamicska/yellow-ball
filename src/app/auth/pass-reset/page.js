"use client";
import { resetPassword } from "aws-amplify/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Card from "../../../components/common/Card";
import Input from "@/components/common/Input";
import LoaderButton from "../../../components/common/LoaderButton";

export default function PasswordReset() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState("");
  const [email, setEmail] = useState("");

  //  Send confirmation code to user's email
  async function handlePassReset(e) {
    e.preventDefault();
    setRes("");
    setError("");
    try {
      setIsLoading(true);
      resetPassword({ username: email });
      setRes(`Confirmation code sent to ${email}`);
      setIsLoading(false);
      router.push(`/auth/confirm-pass-reset?email=${email}`);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }
  return (
    <Card logo={true} title={"Password Reset"}>
      <Input
        type={"email"}
        id={"email"}
        value={email}
        label={"Email"}
        setHook={setEmail}
      />

      {error.length ? (
        <div className="">
          <p className="text-branding-red text-xs">{error}</p>
        </div>
      ) : (
        ""
      )}
      {res.length ? (
        <div className="">
          <p className="text-branding-green text-xs">{res}</p>
        </div>
      ) : (
        ""
      )}
      <LoaderButton
        isLoading={isLoading}
        text={"Password reset"}
        handle={handlePassReset}
      />
    </Card>
  );
}
