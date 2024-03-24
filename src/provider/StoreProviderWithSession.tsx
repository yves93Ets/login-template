import { authOptions } from "@/lib/auth";
import { getUserSession } from "@/lib/session";
import { ChildrenProps } from "@/interfaces/common";
import { StoreProvider } from "@/provider";

export default async function StoreProviderWithSession({
  children,
}: ChildrenProps) {
  const user = await getUserSession(authOptions);

  return <StoreProvider session={user}>{children}</StoreProvider>;
}
