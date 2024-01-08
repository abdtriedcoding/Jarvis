import { Button } from "@/components/ui/button";
import { auth, db } from "@/firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const LoginButton = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();

  if (error) {
    toast.error(error.message);
  }

  const handleGoogleSignIn = async (event: SyntheticEvent) => {
    event.preventDefault();

    const result = await signInWithGoogle();
    const user = result?.user;

    if (user) {
      const docRef = doc(db, `users/${user.uid}`);

      // Check if the user data already exists in Firestore
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        // If the user data doesn't exist, save it in Firestore
        await setDoc(docRef, JSON.parse(JSON.stringify(user)));
      } else {
        // If the user data already exists
        console.log("User data already exists in Firestore");
      }
      router.push("/");
    }
  };

  return (
    <Button disabled={loading} onClick={handleGoogleSignIn} size={"lg"}>
      Login with Google
    </Button>
  );
};

export default LoginButton;
