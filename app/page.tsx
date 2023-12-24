"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [nitroCode, setNitroCode] = useState("");
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Free Discord Nitro Generator</h1>
      <button
        onClick={() => {
          axios
            .get("/api/generateNitro")
            .then((resp) => {
              setNitroCode(
                "https://discord.com/billing/partner-promotions/1180231712274387115/" +
                  resp.data.token
              );
            });
        }}
      >
        Click here to generate nitro!
      </button>
      {nitroCode.length > 0 && <a href={nitroCode}>{nitroCode}</a>}
      </div>
    </main>
  );
}
