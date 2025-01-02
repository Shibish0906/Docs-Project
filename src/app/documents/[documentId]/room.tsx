"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams()

    return (
        <LiveblocksProvider publicApiKey={"pk_dev_SJIE-hiurDR0alsfd54ZtTzdmVX52SoSN20XuxOZ0HQXJ6_dLFQRlWbh4Dal_D54"}>
        <RoomProvider id={params.documentId as string}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
            {children}
            </ClientSideSuspense>
        </RoomProvider>
        </LiveblocksProvider>
  );
}