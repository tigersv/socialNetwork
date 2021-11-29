import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
/*
В целом у тебя это должно выглядеть как то так -
после импорта делаеш массив данных новостей
Пример:
const newsList = [
    {
        title: "Some title",
        text: "Some text",
        author: "Some author",
        category: "Some category"
    },
    {
        title2: "Some title2",
        text2: "Some text2",
        author2: "Some author2",
        category: "Some category"
    } ...
]
трех будет достаточно.
Потом делаешь внешний вид карточки,
и отрисовываеш их с помощью newsList.map()
Лучшей практикой будет сделать отдельную функцию renderNews()
*/

const NewsContent = () => {
    return (
        <div>
            {/*Карточку можно растянуть
            (style={{ width: '100%' }})*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsContent;