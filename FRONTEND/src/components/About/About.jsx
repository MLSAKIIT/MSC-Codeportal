import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from './Images/Code1.svg';
import img2 from './Images/Sheets.svg';
import img3 from './Images/Learn.svg';

import { Card, CardGroup } from 'react-bootstrap';

export default function About() {
    return (
        <div className="App">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src={''} alt="" />
            <CardGroup>
            <Card>
                <Card.Img src={img1}/>
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc hendrerit neque nec urna lobortis.</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img src={img2}/>
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc hendrerit neque nec urna lobortis.</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img src={img3}/>
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc hendrerit neque nec urna lobortis.</Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            

        </div>
    )
}
