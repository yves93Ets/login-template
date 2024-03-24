import { Cormorant_Garamond as FontStyle } from "next/font/google";
import { Container } from "@mui/material";

import { authOptions } from "@/lib/auth";
import { getUserSession } from "@/lib/session";
import { LogOut } from "@/app/components/auth/LogOut";

const font = FontStyle({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Header() {
  const user = await getUserSession(authOptions);

  return (
    <main className="header">
      {user && (
        <Container
          maxWidth="xl"
          sx={{
            maxWidth: "100vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            <span className={`${font.className}`}>Signed in as</span>
            <span> {user?.email}</span>
          </p>

          <LogOut />
        </Container>
      )}
    </main>
  );
}
