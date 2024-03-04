"use client";
import Link from "next/link";
import { confirmResetPassword } from "aws-amplify/auth";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Card from "../../../components/common/Card";
import LoaderButton from "../../../components/common/LoaderButton";
import Input from "@/components/common/Input";

export const dynamic = "force-dynamic";

export default function ConfirmPassReset() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  async function passReset(e) {
    e.preventDefault();
    setError("");
    try {
      setIsLoading(true);
      const res = await confirmResetPassword({
        username: email,
        newPassword: password,
        confirmationCode: code,
      });
      setIsLoading(false);
      setRes("Validated");
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Card logo={true} title={"Reset Password"}>
      <div className="">
        <p className="text-branding-green text-xs">{`Confirmation code sent to ${email}`}</p>
      </div>
      <Input
        type={"text"}
        id={"code"}
        value={code}
        label={"Confirmation Code"}
        setHook={setCode}
      />
      <Input
        type={"password"}
        id={"password"}
        value={password}
        label={"New Password"}
        setHook={setPassword}
      />

      {error.length ? (
        <div className="">
          <p className="text-branding-red text-xs">{error}</p>
        </div>
      ) : (
        ""
      )}
      {res.length ? (
        <div className="flex">
          <p className="text-gray-600 dark:text-gray-100 text-sm">{res},</p>
          <Link href={"/auth/login"}>
            <span className="cursor-pointer ml-2 text-branding-green underline text-sm font-bold">
              login.
            </span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <LoaderButton
        isLoading={isLoading}
        text={"Reset password"}
        handle={passReset}
      />
    </Card>
  );
}
