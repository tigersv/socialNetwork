import React from 'react';
import {Tabs, Tab, Card} from "react-bootstrap"
import {users} from "../../../../fakeBase/users"


const Checkbar = () => {

    const renderUser = (mappedObject) => {
        return(
            <Card key={mappedObject.id}
                  style={{borderRadius: "50px", margin: "10px 0 0 0"}}>
                <Card.Body >
                    <img
                        src={mappedObject.avatar}
                        style={{width: "5vw", float: "left",height: "10vh", verticalAlign: "middle", margin: "0px 10px 0px 15px"}}
                    />
                    <p style={{margin: "5px 0 0 0"}}>{mappedObject.name}</p>
                    <p style={{margin: "5px 0 0 0"}}>{mappedObject.username}</p>
                    <p style={{margin: "5px 0 0 0"}}>course:{mappedObject.course}</p>

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