"use client";

import { ChildrenProps } from "@/interfaces/common";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
