import React from 'react';
import {Tabs, Tab, Card} from "react-bootstrap"
import {users} from "../../../../fakeBase/users"


const Checkbar = () => {

    const renderUser = (mappedObject) => {
        return(
            <Card>
                <Card.Body>
                    <img
                        src={mappedObject.avatar}
                        style={{width: "100px", float: "left"}}
                    />
                    <p>{mappedObject.name}</p>
                    <p>{mappedObject.username}</p>
                    <p>course:{mappedObject.course}</p>

                </Card.Body>
            </Card>
        )
    }

    const renderUsers = (online) => {
        return (
            users.map((mappedObject, index) => {
            if (online){
                if (mappedObject.online){
                    console.log(mappedObject)
                    return(
                        renderUser(mappedObject)
                    )
                }
            }else {
                if(!mappedObject.online){
                    return (
                        renderUser(mappedObject)
                    )
                }
            }
        }))
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
                    {renderUsers(true)}
                </Tab>
                <Tab eventKey="Offline" title="Offline">
                    {renderUsers(false)}
                </Tab>

            </Tabs>
        </div>
    );
};

export default Checkbar;