import React from "react";
import MyPage from "./components/References/MyPage/MyPage";
import Friends from "./components/References/Friends/Friends"
import Message from "./components/References/Messages/Message";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/References/ReusableComponents/SideBar";
import News from "./components/References/News/News"
import NavBar from "./components/References/ReusableComponents/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <Container fluid="md">
            <Row>
                <Col>
                    <SideBar/>
                </Col>
                <Col sm={8}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MyPage/>}/>
                            <Route path="/my_page" element={<MyPage/>}>
                                <Route path="/my_page/1" />
                            </Route>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/friends" element={<Friends/>}/>
                            <Route path="/message" element={<Message/>}/>
                        </Routes>
                    </BrowserRouter>
                </Col>
                <Col>
                    search
                </Col>
            </Row>
        </Container>
        </div>
);
}

export default App;
