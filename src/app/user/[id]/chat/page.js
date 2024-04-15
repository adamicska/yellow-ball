"use client";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export default function chat() {
  const [user, setUser] = useContext(AuthContext);

  return (
    <div className="min-h-screen">
      Hello {user.username}. This is the Chat view
    </div>
  );
}
