import React from 'react';
import {Col, Row} from "react-bootstrap";
import LeftContent from "./Content/LeftContent";
import RightContent from "./Content/RightContent";

const MyPage = () => {
    const path = window.location.pathname
    const split = path.split('/')
    const id = Number(split[2])
    console.log(id)
    return (
        <div>
            <Row>
                <Col sm={3}>
                    <LeftContent userId={id}/>
                </Col>
                <Col sm={9}>
                    <RightContent/>
                </Col>
            </Row>
        </div>
    );
};

export default MyPage;