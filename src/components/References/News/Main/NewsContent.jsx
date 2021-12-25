import React from 'react';
import {Card, ListGroup, ListGroupItem, Carousel, Button} from "react-bootstrap"


// const one_news = {
//     header: {
//         img: "https://sun9-49.userapi.com/s/v1/if1/JPbkV_B7JFgtYr7fI2awraNOjomLqi2GNLTvrmFs78GW1rlhAL_DWie_hoMIw2laILBbSHZu.jpg?size=50x50&quality=96&crop=0,0,571,571&ava=1",
//         name: "Подслушано в Рыбацком ™"
//     },
//     body: {
//         text: "Ну наконец-то! 🙌 В 2022 году начнется капитальный ремонт Рыбацкого моста через реку Славянку!👍🏻\n" +
//             "\n" +
//             "Работы вызваны необходимостью организации альтернативного выезда с территории Усть-Славянки – помимо загруженного Шлиссельбургского проспекта. После завершения капремонта возможно перенаправят транспортные потоки транзитом через Славянскую улицу и Рыбацкий проспект с выездом на проспект Обуховской Обороны, а далее – в центр города или на КАД.",
//
//         imgs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4_83ejY8Rku15MXpUEmGDaRoUTwAjYEqSA&usqp=CAU",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3IHcoa2WUrwwdHlGmUTEJ8S1E9PgIz3VEA&usqp=CAU",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJG4mIlWmnz3ol0ZJ4esuYIvfjGsPDwbO2w&usqp=CAU",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxugMZJYry2Pcy2FK5Y50YJRxyaF3kZdRzQ&usqp=CAU"
//         ]
//     },
//     social: {
//         likes: 150,
//         comments: 33,
//         reposts: 30,
//         views: 57000
//     }
// }

// const news = [
//     {
//         header: {
//             img: "https://sun9-49.userapi.com/s/v1/if1/JPbkV_B7JFgtYr7fI2awraNOjomLqi2GNLTvrmFs78GW1rlhAL_DWie_hoMIw2laILBbSHZu.jpg?size=50x50&quality=96&crop=0,0,571,571&ava=1",
//             name: "Подслушано в Рыбацком ™"
//         },
//         body: {
//             text: "Ну наконец-то! 🙌 В 2022 году начнется капитальный ремонт Рыбацкого моста через реку Славянку!👍🏻\n" +
//                 "\n" +
//                 "Работы вызваны необходимостью организации альтернативного выезда с территории Усть-Славянки – помимо загруженного Шлиссельбургского проспекта. После завершения капремонта возможно перенаправят транспортные потоки транзитом через Славянскую улицу и Рыбацкий проспект с выездом на проспект Обуховской Обороны, а далее – в центр города или на КАД.",
//
//             imgs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4_83ejY8Rku15MXpUEmGDaRoUTwAjYEqSA&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3IHcoa2WUrwwdHlGmUTEJ8S1E9PgIz3VEA&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJG4mIlWmnz3ol0ZJ4esuYIvfjGsPDwbO2w&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxugMZJYry2Pcy2FK5Y50YJRxyaF3kZdRzQ&usqp=CAU"
//             ]
//         },
//         social: {
//             likes: 150,
//             comments: 33,
//             reposts: 30,
//             views: 57000
//         }
//     },
//     {
//         header: {
//             img: "https://www.magnitogorsk.ru/storage/app/media/icons/menu/main/9.png",
//             name: "ПДД"
//         },
//         body: {
//             text: "Настоящие Правила дорожного движения <*> устанавливают единый порядок дорожного движения на всей территории Российской Федерации. Другие нормативные акты, касающиеся дорожного движения, должны основываться на требованиях Правил и не противоречить им.",
//
//             imgs: ["https://s0.rbk.ru/v6_top_pics/media/img/4/31/754788601863314.jpeg",
//                 "https://rstatic.oshkole.ru/editor_images/95165.jpg",
//                 "https://kubnews.ru/upload/resize_cache/iblock/2e1/1200_630_2/2e1d16651a099743a751d1e946cef046.jpg",
//                 "https://upload.wikimedia.org/wikipedia/commons/e/e1/Traffic_lights_rus.jpg"
//             ]
//         },
//         social: {
//             likes: 123,
//             comments: 14,
//             reposts: 42,
//             views: 12000
//         }
//     },
//     {
//         header: {
//             img: "https://www.kp40.ru/news_images/anons/42069.jpg",
//             name: "В мире живтных"
//         },
//         body: {
//             text: "Русское слово «животное» образовано от «живот», в прошлом означавшего «жизнь, имущество». В быту под терминами «дикие животные», «домашние животные» часто понимаются только млекопитающие или четвероногие наземные позвоночные (млекопитающие, пресмыкающиеся и земноводные). Однако в науке за термином «животные» закреплено более широкое значение, соответствующее латинскому Animalia (см. выше). В научном смысле к животным, помимо млекопитающих, пресмыкающихся и земноводных, относится огромное множество других организмов: рыбы, птицы, насекомые, паукообразные, моллюски, морские звёзды, черви и другие. Человек также относится к царству животных, отряду плацентарных млекопитающих, приматам[1], но традиционно изучается отдельно.",
//
//             imgs: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfD6aumD6QQVlKR-GJEpb7_WtevWeD6lKzA&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaeWJxcuxmXrRcxWZRDjlZmCybhCFpexVJw&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6H12APtgXwH01YisS_zd_54rWUc11p7nBBQ&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeQuEvwAfV5sOh7RrOoRCoETs-7NyUyrnGw&usqp=CAU",
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6tptUmRPDsKrujYT_AQcOO0GK7W8-2WGwQ&usqp=CAU"
//             ]
//         },
//         social: {
//             likes: 23,
//             comments: 11,
//             reposts: 62,
//             views: 14500
//         }
//     }
// ]


const NewsContent = () => {
    const carouselImg = () => {
        return (one_news.body.imgs.map((link, index) => {
            return(
                <Carousel.Item
                key={index}>
                    <img
                        style={{height: "46vh"}}
                        className="d-block w-100"
                        src={link}
                        alt={index + "slide"}
                    />
                </Carousel.Item>
            )
        }))
    }

    // const newsMapping = () => {
    //     return (news.map((mappedObject, index) => {
    //         return (
    //             <div>
    //                 <Card style={{width: '100%'}}>
    //                     <Card.Body>
    //                         <Card.Title style={{color: "blue"}}><img src={mappedObject.header.img}
    //                                                                  alt="avatar"/> {mappedObject.header.name}
    //                         </Card.Title>
    //                         <Card.Text>
    //                             {mappedObject.body.text}
    //                         </Card.Text>
    //                         <Carousel>
    //                             {carouselImg()}
    //                         </Carousel>
    //                     </Card.Body>
    //                     <ListGroup className="list-group-flush">
    //                         <ListGroupItem>
    //                             <Button style={{
    //                                 backgroundColor: "#EAECEE",
    //                                 color: "#566573",
    //                                 borderRadius: "20px",
    //                                 border: "none",
    //                                 marginRight: "10px"
    //                             }}>
    //                                 <svg
    //                                     style={{marginRight: "5px"}}
    //                                     xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                                     className="bi bi-heart" viewBox="0 0 16 16">
    //                                     <path
    //                                         d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    //                                 </svg>
    //                                 {mappedObject.social.likes}
    //                             </Button>
    //                             <Button style={{
    //                                 backgroundColor: "#EAECEE",
    //                                 color: "#566573",
    //                                 borderRadius: "20px",
    //                                 border: "none",
    //                                 marginRight: "10px"
    //                             }}>
    //                                 <svg
    //                                     style={{marginRight: "5px"}}
    //                                     xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                                     className="bi bi-chat-left" viewBox="0 0 16 16">
    //                                     <path
    //                                         d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //                                 </svg>
    //                                 {mappedObject.social.comments}
    //                             </Button>
    //                             <Button style={{
    //                                 backgroundColor: "#EAECEE",
    //                                 color: "#566573",
    //                                 borderRadius: "20px",
    //                                 border: "none",
    //                                 marginRight: "10px"
    //                             }}>
    //                                 <svg
    //                                     style={{marginBottom: "5px", marginRight: "5px"}}
    //                                     xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="currentColor"
    //                                     className="bi bi-reply" viewBox="0 0 16 16">
    //                                     <path
    //                                         d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
    //                                 </svg>
    //                                 {mappedObject.social.reposts}
    //                             </Button>
    //
    //                             <Button style={{
    //                                 backgroundColor: "#EAECEE",
    //                                 color: "#566573",
    //                                 borderRadius: "20px",
    //                                 border: "none",
    //                                 marginRight: "10px"
    //                             }}>
    //                                 <svg
    //                                     style={{marginBottom: "5px", marginRight: "5px"}}
    //                                     xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //                                     className="bi bi-eye-fill" viewBox="0 0 16 16">
    //                                     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
    //                                     <path
    //                                         d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    //                                 </svg>
    //                                 {mappedObject.social.reposts}
    //                             </Button>
    //
    //                         </ListGroupItem>
    //                     </ListGroup>
    //                     <Card.Body>
    //                         <Card.Link href="#">Card Link</Card.Link>
    //                         <Card.Link href="#">Another Link</Card.Link>
    //                     </Card.Body>
    //                 </Card>
    //             </div>
    //         )
    //     }))
    // }

    return (
        <div></div>
    );
};

export default NewsContent;

