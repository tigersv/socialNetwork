import React from 'react';
import {Card} from "react-bootstrap"
import {users} from "../../../fakeBase/users"


const Main = () => {

    const yourFriends = () => {
        return(users.map((mappedObject, index) => {
            return(
                <Card style={{ width: '100%', borderRadius: '50px', margin: '0px 0px 5px 0px',}} id={mappedObject.id}>
                    <p style={{margin: '2% 0px 2% 2%'}}>
                        <Card.Img variant="top" src={mappedObject.avatar} style={{width: '9.5%', float: "left", verticalAlign: "middle", margin: '1% 5% 2% 0px'}} />
                        <p style={{textAlign: 'center'}}>{mappedObject.name}</p>
                        <div style={{verticalAlign: "bottom",}}>
                        <button style={{
                            backgroundColor: '#e0e0e0', width: '80% ', margin: '0px auto 0px ', height: "50px", border: "0", borderRadius: "20px"
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