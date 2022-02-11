import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Container className="header_container">
        <Link to="/" id="header_link">
          The Developer Profile
        </Link>
        <Link to="/" id="header_link">
          All Developers
        </Link>
      </Container>
    </div>
  );
}
