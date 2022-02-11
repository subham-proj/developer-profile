import React from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../graphics/account_circle.svg";
import arrow from "../graphics/north_east.svg";
import { useSelector } from "react-redux";
import Loader from "../components/loader";

export default function UserList({ searchTerm }) {
  const users = useSelector((state) => state.users);
  const { loading, error, allUsers } = users;

  const filterMethod = (e) => {
    if (searchTerm === "") {
      return e;
    } else if (e.id?.toLowerCase().includes(searchTerm?.toLocaleLowerCase())) {
      return e;
    }
  };

  const renderSuggestion = allUsers?.filter((e) => filterMethod(e));

  console.log(renderSuggestion);

  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <>
            {users &&
              renderSuggestion?.map((e, idx) => (
                <Col
                  key={idx}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                  className="each_user"
                >
                  <img
                    src={e.avatar_url ? e.avatar_url : user}
                    alt="display_picture"
                  />
                  <Link to={`/user/${e.id}`} id="link">
                    {e.id}
                    <img src={arrow} id="arrow" alt="goto" />
                  </Link>
                </Col>
              ))}
          </>
        )}
      </Row>
    </Container>
  );
}
