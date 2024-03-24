"use client";

import { signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

export function LogOut() {
  return (
    <LogoutIcon
      sx={{ cursor: "pointer", fontSize: 24 }}
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        })
      }
    />
  );
}
