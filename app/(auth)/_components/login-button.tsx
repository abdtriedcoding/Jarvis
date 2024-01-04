"use client";

import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const LoginButton = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Button disabled={loading} onClick={() => signInWithGoogle()} size={"lg"}>
      Login with Google
    </Button>
  );
};

export default LoginButton;
