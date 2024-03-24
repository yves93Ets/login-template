import Link from "next/link";
import { Button } from "@mui/material";

import { authOptions } from "@/lib/auth";
import { getUserSession } from "@/lib/session";

export const metadata = {
  title: "Login",
  description: "login template",
};

export default async function Home() {
  const user = await getUserSession(authOptions);

  return (
    <main>
      {user ? (
        <p>Hello you are in </p>
      ) : (
        <Button>
          <Link href="/auth">Go to login</Link>
        </Button>
      )}
    </main>
  );
}
