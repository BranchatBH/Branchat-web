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
    if(window.opener){
      window.opener.postMessage(msg, "https://branchat.netlify.app");
    }

    window.close?.();
  }, []);

  return <div>callback</div>;
}
