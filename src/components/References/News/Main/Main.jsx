import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../../ReusableComponents/SideBar";
import NewsContent from "./NewsContent";


const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}>
                        <SideBar/>
                    </Col>
                    <Col sm={8}>
                        <NewsContent/>
                    </Col>
                    <Col sm={2}>
                        search
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;