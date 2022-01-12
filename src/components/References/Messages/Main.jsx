import React from 'react';
import {Card} from "react-bootstrap"
import {users} from "../../../fakeBase/users"


const Main = () => {

    const yourFriends = () => {
        return(users.map((mappedObject, index) => {
            return(
                <Card style={{ width: '50rem', borderRadius: '50px', margin: '0px 0px 5px 0px',}} id={mappedObject.id}>
                    <p style={{margin: '5px 0px 5px 15px'}}>
                        <Card.Img variant="top" src={mappedObject.avatar} style={{width: '5rem', float: "left", verticalAlign: "middle", margin: '10px 20px 10px 0px'}} />
                        <p style={{textAlign: 'center'}}>{mappedObject.name}</p>
                        <div style={{verticalAlign: "bottom",}}>
                        <button style={{
                            backgroundColor: '#e0e0e0', width: '40rem', margin: '0px auto 0px ', height: "50px", border: "0", borderRadius: "20px"
                        }}>
                        </button>
                        </div>
                    </p>
                </Card>
            )
        }))
    }



    return (
        <div>
            {yourFriends()}
        </div>
    );
};

export default Main;