"use client";

import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const LoginButton = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  if (error) {
    toast.error(error.message);
  }

  return (
    <Button disabled={loading} onClick={() => signInWithGoogle()} size={"lg"}>
      Login with Google
    </Button>
  );
};

export default LoginButton;
