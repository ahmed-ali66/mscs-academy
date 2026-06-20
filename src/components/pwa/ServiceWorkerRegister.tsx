"use client";

import { useEffect } from "react";

/**
 * Registers the service worker on the client.
 * Renders nothing — purely a side-effect component.
 * Add <ServiceWorkerRegister /> to the root layout.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return; // dev: skip SW to avoid caching headaches

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });
        // Check for updates every hour
        setInterval(() => {
          registration.update().catch(() => {
            /* ignore */
          });
        }, 60 * 60 * 1000);
      } catch {
        // Silently fail — SW is a progressive enhancement
      }
    };

    // Register only after page is fully loaded (don't block first paint)
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
