"use client";

import { useEffect } from "react";
import { normalizeHash } from "@/lib/contact";

export default function HashUrlGuard() {
  useEffect(() => {
    const repairHash = () => {
      const normalizedHash = normalizeHash(window.location.hash);

      if (normalizedHash !== window.location.hash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${normalizedHash}`,
        );
      }
    };

    repairHash();
    window.addEventListener("hashchange", repairHash);
    return () => window.removeEventListener("hashchange", repairHash);
  }, []);

  return null;
}
