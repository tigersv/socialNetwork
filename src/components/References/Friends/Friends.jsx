import React from 'react';
import NavBar from "../ReusableComponents/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../ReusableComponents/SideBar";
import NewsContent from "../News/Main/NewsContent";
import FriendsCheckList from "./Main/FriendsCheckList";

const Friends = () => {
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
                            <FriendsCheckList/>
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

export default Friends;