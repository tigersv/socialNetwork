import React from 'react';
import {Col, Row} from "react-bootstrap";
import LeftContent from "./Content/LeftContent";
import RightContent from "./Content/RightContent";

const MyPage = () => {
    return (
        <div>
            <Row>
                <Col sm={3}>
                    <LeftContent/>
                </Col>
                <Col sm={9}>
                    <RightContent/>
                </Col>
            </Row>
        </div>
    );
};

export default MyPage;