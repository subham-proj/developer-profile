import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import default_dp from "../graphics/account_circle.svg";
import "../styles/developerProfile.css";
import map from "../graphics/location_on.svg";
import business from "../graphics/business.svg";
import link from "../graphics/insert_link.svg";
import Github from "../graphics/github.png";
import Linkedin from "../graphics/linkedin.png";
import Codechef from "../graphics/codechef.png";
import Hackerrank from "../graphics/Hackerrank.png";
import Twitter from "../graphics/twitter.png";
import Medium from "../graphics/Medium.png";
import email from "../graphics/email.svg";

import { getUserById } from "../state/actions/userActions";
import Loader from "../components/loader";

import arrow from "../graphics/north_east.svg";

export default function DeveloperProfile({ location }) {
  const userId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(userId));
  }, [location]);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  return (
    <div>
      <Header />
      {loading ? (
        <Container style={{ marginTop: "50px" }}>
          <Loader />
        </Container>
      ) : error ? (
        <Container>
          <Alert variant="danger" style={{ marginTop: "50px" }}>
            {error}
          </Alert>
        </Container>
      ) : (
        <div>
          <div className="profile_layout">
            <Container>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12} className="display_picture">
                  <img
                    src={user?.avatar_url ? user?.avatar_url : default_dp}
                    alt="user"
                  />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12} className="profile_data">
                  <span>{user?.name}</span>

                  <p>{user?.bio}</p>
                  <p id="accounts">
                    <a
                      href={`https://www.github.com/${user?.github_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Github} alt="Github" />
                    </a>
                    {user?.linkedin_id && (
                      <a
                        href={`https://www.linkedin.com/in/${user?.linkedin_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Linkedin} alt="Linkedin" />
                      </a>
                    )}

                    {user?.codechef_id && (
                      <a
                        href={`https://www.codechef.com/users/${user?.codechef_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Codechef} alt="Codechef" />
                      </a>
                    )}

                    {user?.hackerrank_id && (
                      <a
                        href={`https://www.hackerrank.com/${user?.hackerrank_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Hackerrank} alt="Hackerrank" />
                      </a>
                    )}

                    {user?.twitter_id && (
                      <a
                        href={`https://www.twitter.com/${user?.twitter_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Twitter} alt="Twitter" />
                      </a>
                    )}

                    {user?.medium_id && (
                      <a
                        href={`https://www.medium.com/@${user?.medium_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Medium} alt="Medium" />
                      </a>
                    )}

                    {user?.email && (
                      <a
                        href={`mailto:user?.email`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={email} alt="email" />
                      </a>
                    )}
                  </p>
                  <p id="third_line">
                    {user?.location && <img src={map} alt="pointer" />} &nbsp;
                    {user?.location} &nbsp;&nbsp;
                    {user?.company && (
                      <img src={business} alt="business" />
                    )}{" "}
                    &nbsp; {user?.company}
                    &nbsp;&nbsp;
                    {user?.blog && <img src={link} alt="link" />} &nbsp;{" "}
                    {user?.blog}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="repo">
            <span>Github repositories</span>
            <hr></hr>
            {user?.repos?.map((e, idx) => (
              <section id="each_repo" key={idx}>
                <Container className="repo_container">
                  <span>
                    <a
                      href={e.html_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {e.name}
                      <img src={arrow} id="arrow" alt="goto" />
                    </a>{" "}
                    &nbsp;&nbsp;{" "}
                    <span id="updatedAt">
                      Updated on : {new Date(e.updated_at).toDateString()}
                    </span>
                  </span>
                  <p>{e.description ? e.description : "no description"}</p>
                </Container>
                <hr></hr>
              </section>
            ))}
          </div>
        </div>
      )}
      <div className="footer">
        <span>Made with ❤️ by Subham</span>
      </div>
    </div>
  );
}
