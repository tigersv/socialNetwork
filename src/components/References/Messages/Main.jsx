import React from 'react';
import {Card} from "react-bootstrap"
import {users} from "../../../fakeBase/users"


const Main = () => {

    const yourFriends = (mappedObject) => {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {console.log(mappedObject.name)}
                    <Card.Title>{mappedObject.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            {yourFriends(users)}
        </div>
    );
};

export default Main;