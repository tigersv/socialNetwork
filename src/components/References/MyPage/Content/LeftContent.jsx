import React from 'react';
import {Card, Button} from "react-bootstrap";
import userImg from '../../../../assets/images/user.png'
import {users} from "../../../../fakeBase/users"

const LeftContent = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Img variant="top" src={users[0].avatar} />
                <Card.Body>
                    <Button style={{width: '90%', }} variant="primary">Редактировать</Button>
                    <div style={{"marginTop": 20, "marginBottom": 20}}></div>
                    <Card.Text>
                        Воспоминания
                    </Card.Text>
                    <Card.Text>
                        Денежные перводы

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeftContent;