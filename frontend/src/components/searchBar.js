import React from "react";
import { Container } from "react-bootstrap";
import search from "../graphics/search.svg";

export default function SearchBar() {
  return (
    <Container className="search_layout">
      <input
        type="text"
        placeholder="Search for username"
        className="search_input"
      />
      <img src={search} alt="search_btn" />
    </Container>
  );
}
