import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import SideBar from "./SideBar";
import Content from "./Content";

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}>
                        <SideBar/>
                    </Col>
                    <Col sm={10}>
                        <Content/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;