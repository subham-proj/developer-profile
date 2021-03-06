import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/dashboard.css";
import Graphic from "../graphics/undraw_dev.png";
import { Container } from "react-bootstrap";

import SearchBar from "../components/searchBar";
import UserList from "../components/userList";
import ModalForm from "../components/modalForm";

import { getAllUsers } from "../state/actions/userActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const users = useSelector((state) => state.users);
  const { allUsers } = users;

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="header_bg">
        <Container>
          <div className="banner_header">
            <div className="header_text_lg">
              <p>The Developer Repository</p>
            </div>
            <div>
              <img src={Graphic} alt="vector_developer" />
            </div>
            <div className="header_text_sm">
              <p>The Developer Repository</p>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid className="dashboard_content_header">
        <p>Explore developer profiles</p>
        <hr></hr>
        <div className="searchBar_container">
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <div className="userlist">
          <UserList searchTerm={searchTerm} />
        </div>
        <hr></hr>
        <div id="find">
          {allUsers?.length !== 0 ? (
            <span>Could not find what you were looking for</span>
          ) : (
            <span>No developers added yet</span>
          )}
          <br />
          <button className="add_button" onClick={() => setShowModal(true)}>
            Add developer info
          </button>
          <ModalForm show={showModal} onHide={() => setShowModal(false)} />
        </div>
      </Container>
      <div className="footer">
        <span>Made with ?????? by Subham</span>
      </div>
    </div>
  );
}
