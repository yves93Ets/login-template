import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { SignInWithEmail } from "@/app/components/auth/SignInWithEmail";

export const metadata = {
  title: "login-template",
  description: "Sign in with magic email",
};

export default async function SignUp() {
  const user = await getUserSession(authOptions);
  if (user) return redirect("/");

  return <SignInWithEmail />;
}
