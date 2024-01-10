"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <>
      <Button onClick={() => signIn("google", { callbackUrl: "/" })} size="lg">
        Login with Google
      </Button>
    </>
  );
};

export default LoginButton;
