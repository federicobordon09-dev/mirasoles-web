"use client";

import { useEffect } from "react";

export default function ScrollRestore() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return null;
}
