import React from 'react';
import {Tabs, Tab, Card} from "react-bootstrap"
import {users} from "../../../../fakeBase/users"


const Checkbar = () => {
    const check = (onLine) => {
        if(online){
            return (users.map((mappedObject, index) => {
                return (
                    <div>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="Online" title="Online">
                                <Card>
                                    <Card.Body>
                                        <img
                                            src={mappedObject.avatar}
                                            style={{width: "100px", float: "left"}}
                                        />
                                        <p >{mappedObject.name}</p>
                                        <p>{mappedObject.username}</p>
                                        <p>course: {mappedObject.course}</p>

                                    </Card.Body>
                                </Card>
                            </Tab>
                            <Tab eventKey="Offline" title="Offline">

                            </Tab>

                        </Tabs>
                    </div>
                )
            }))
        }
        }


    return (
        <div>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Online" title="Online">
                    <Card>
                        <Card.Body>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2umeiV8pVdahTlB81yAxw4b8O7X0PFaEDsQ&usqp=CAU"
                                    style={{width: "100px", float: "left"}}
                                />
                                <p >Name</p>
                                <p>username</p>
                                <p>course:1</p>

                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="Offline" title="Offline">

                </Tab>

            </Tabs>
        </div>
    );
};

export default Checkbar;