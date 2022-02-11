import React from "react";
import { Container } from "react-bootstrap";

export default function ErrorScreen() {
  return (
    <div style={{ background: "#7c639f", color: "white", height: "100vh" }}>
      <Container
        style={{
          textAlign: "center",
          paddingTop: "300px",
        }}
      >
        <div>
          <h1>
            Error{" "}
            <img
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/100/000000/external-error-web-hosting-xnimrodx-blue-xnimrodx.png"
              alt="loader"
            />
          </h1>
        </div>
        <div>
          <h2>Oops! The page you are looking for does not exist.</h2>
        </div>
      </Container>
    </div>
  );
}
