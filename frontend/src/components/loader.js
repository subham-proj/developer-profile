import React from "react";
import loading from "../graphics/loading.gif";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loading} alt="loading..." />
    </div>
  );
}
