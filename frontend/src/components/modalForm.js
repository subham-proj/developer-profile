import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Github from "../graphics/github.png";
import Linkedin from "../graphics/linkedin.png";
import Codechef from "../graphics/codechef.png";
import Hackerrank from "../graphics/Hackerrank.png";
import Twitter from "../graphics/twitter.png";
import Medium from "../graphics/Medium.png";

export default function ModalForm(props) {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [codechef, setCodechef] = useState("");
  const [hackerrank, setHackerrank] = useState("");
  const [twitter, setTwitter] = useState("");
  const [medium, setMedium] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      github,
      linkedin,
      codechef,
      hackerrank,
      twitter,
      medium,
    };

    props.onHide();
    setGithub("");
    setLinkedin("");
    setCodechef("");
    setHackerrank("");
    setTwitter("");
    setMedium("");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={submitHandler}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add developer profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Github} width={30} height={30} alt="Github" />
              &nbsp; Github *
            </Form.Label>
            <Form.Control
              required
              className="input_field"
              type="text"
              onChange={(e) => setGithub(e.target.value)}
              value={github}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Linkedin} width={30} height={30} alt="Linkedin" />
              &nbsp; Linkedin
            </Form.Label>
            <Form.Control
              className="input_field"
              type="text"
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Codechef} width={30} height={30} alt="Codechef" />
              &nbsp; Codechef
            </Form.Label>
            <Form.Control
              className="input_field"
              type="text"
              onChange={(e) => setCodechef(e.target.value)}
              value={codechef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Hackerrank} width={30} height={30} alt="Hackerrank" />
              &nbsp; Hackerrank
            </Form.Label>
            <Form.Control
              className="input_field"
              type="text"
              onChange={(e) => setHackerrank(e.target.value)}
              value={hackerrank}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Twitter} width={30} height={30} alt="Twitter" />
              &nbsp; Twitter
            </Form.Label>
            <Form.Control
              className="input_field"
              type="text"
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <img src={Medium} width={30} height={30} alt="Medium" />
              &nbsp; Medium
            </Form.Label>
            <Form.Control
              className="input_field"
              type="text"
              onChange={(e) => setMedium(e.target.value)}
              value={medium}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Link
            onClick={props.onHide}
            style={{
              textDecoration: "none",
              color: "black",
              pointer: "cursor",
            }}
          >
            Cancel &nbsp;
          </Link>
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
