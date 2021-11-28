import React from 'react';
import {Nav} from "react-bootstrap"

const SideBar = () => {
    return (
        <div>
            <Nav className="flex-column">
                <Nav.Link eventKey="link-1" href="/my_page">моя страница</Nav.Link>
                <Nav.Link eventKey="link-2" href="message">сообщения</Nav.Link>
                <Nav.Link eventKey="link-3" href="friends">друзья</Nav.Link>
                <Nav.Link eventKey="link-4" href="/news">новости</Nav.Link>
                <Nav.Link eventKey="link-5" href="community">сообщества</Nav.Link>
            </Nav>
        </div>
    );
};

export default SideBar;