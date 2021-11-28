import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../../ReusableComponents/SideBar";
import Content from "../../MyPage/Main/Content";

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}>
                        <SideBar/>
                    </Col>
                    <Col sm={10}>
                        News
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;