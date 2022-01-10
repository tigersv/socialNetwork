import React from 'react';
import NavBar from "../ReusableComponents/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../ReusableComponents/SideBar";
import Main from "./Main"

const Message = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <SideBar/>
                        </Col>
                        <Col sm={8}>
                          <Main></Main>
                        </Col>
                        <Col sm={2}>
                            search
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Message;