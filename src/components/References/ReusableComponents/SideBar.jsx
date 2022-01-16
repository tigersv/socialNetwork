import React from 'react';
import {Nav} from "react-bootstrap"
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }]

const navLinkStyle = {
    border: "1px solid blue",
    borderRadius: "20px",
    marginBottom: "5px",
}
const iconStyle = {
    width: "1.3rem",
    marginRight: "0.8rem",
}

const SideBar = () => {
    return (
        <div>
            <Nav className="flex-column">
                <Nav.Link style={navLinkStyle} eventKey="link-1" href="/my_page">
                    <img style={iconStyle} src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-user-back-to-school-kmg-design-flat-kmg-design.png"/>
                    моя страница
                </Nav.Link>
                <Nav.Link style={navLinkStyle} eventKey="link-2" href="message">
                    <img style={iconStyle} src="https://img.icons8.com/fluency/48/000000/chat-message.png"/>
                    сообщения
                </Nav.Link>
                <Nav.Link style={navLinkStyle} eventKey="link-3" href="friends">
                    <img style={iconStyle} src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-friend-notifications-justicon-flat-justicon.png"/>
                    друзья
                </Nav.Link>
                <Nav.Link style={navLinkStyle} eventKey="link-4" href="/news">
                    <img style={iconStyle} src="https://img.icons8.com/stickers/48/000000/activity-feed-2.png"/>
                    новости
                </Nav.Link>
                <Nav.Link style={navLinkStyle} eventKey="link-5" href="community">
                    <img style={iconStyle} src="https://img.icons8.com/stickers/100/000000/communication.png"/>
                    сообщества
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default SideBar;