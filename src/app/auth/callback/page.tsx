"use client";
import { useEffect } from "react";

export default function Callback() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const msg = {
      type: "OAUTH_CODE",
      code: p.get("code"),
      state: p.get("state"),
      error: p.get("error"),
    };
    window.postMessage(msg, "*");
  }, []);

  return <div>callback</div>;
}
