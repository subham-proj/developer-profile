import React, { useState } from "react";
import { Container } from "react-bootstrap";
import searchIcon from "../graphics/search.svg";

export default function SearchBar({ setSearchTerm }) {
  return (
    <Container className="search_layout">
      <input
        type="text"
        placeholder="Search for username"
        className="search_input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={searchIcon} alt="search_btn" />
    </Container>
  );
}
