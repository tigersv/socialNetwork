import React from 'react';
import {Tabs, Tab, Card} from "react-bootstrap"
import {users} from "../../../fakeBase/users"
import {useNavigate} from "react-router-dom"


const Friends = () => {
    let navigate = useNavigate()

    const redirectHandler = (id) => {
        return(
            navigate("/users/" + id)
        )
    }

    const renderUser = (mappedObject) => {
        return(
            <Card key={mappedObject.id}
                  style={{borderRadius: "50px", margin: "10px 0 0 0"}}>
                <Card.Body >
                    <img
                        onClick={() => redirectHandler(mappedObject.id)}
                        src={mappedObject.avatar}
                        style={{width: "100px", float: "left",height: "100px",
                            verticalAlign: "middle", margin: "0px 10px 0px 15px",
                            cursor: "pointer"}}
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
                defaultActiveKey="Online"
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

export default Friends;