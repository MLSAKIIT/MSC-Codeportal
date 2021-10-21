import React from 'react';
import { Card, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import './DashboardQ.css';

const DashboardQ = () => {
    const progress = 70;

    let guess = 'default';
    let btnText = 'Start Now';
    let guessBtn = 'outline-primary';
    let cardsSubtitle = 'Not started yet';
    let x = 8;
    
    if (progress <= 0) {
        guess = 'primary';
        btnText = 'Start Now';
        guessBtn = 'outline-primary';
        cardsSubtitle = 'Not started yet';
    } else if (progress >= 1 && progress <= 99) {
        guess = 'warning';
        btnText = 'Continue';
        guessBtn = 'outline-warning';
        cardsSubtitle = x + ' more questions left';
    } else if (progress >= 100) {
        guess = 'success';
        btnText = 'Completed';
        guessBtn = 'outline-success';
        cardsSubtitle = 'No questions left';
    }
      

    return (
        <div style={{ marginTop: '100px', overflow: 'hidden', paddingBottom: '20px' }} className="d-flex flex-nowrap justify-content-flex-start">
            <Row> 
                <span className="title-span">Hi, Username</span>
                <div className="d-flex flex-wrap container-fluid">
                    <Col lg={3} className="d-inline">
                        <Card className="sheet-body" style={{ width: '18rem', height: '30rem'}}>
                            <Card.Body>
                                <Card.Title className="sheet-title">Sheet Name</Card.Title>
                                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">Name</Card.Subtitle>

                                <Card.Title className="sheet-title">Total No. of Questions</Card.Title>
                                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">xx Questions</Card.Subtitle>

                                <Card.Title className="sheet-title">Total No. of Solved Questions</Card.Title>
                                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">xx Questions (xx % done)</Card.Subtitle>

                                <Card.Title className="sheet-title">Total No. of Unsolved Questions</Card.Title>
                                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">xx Questions  (xx % left)</Card.Subtitle>

                                <Card.Title className="sheet-title">Favourites</Card.Title>
                                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">xx Questions</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-0">
                        <Row xs={2} md={3} className="mx-0 px-0 g-4 order-2">
                            {Array.from({ length: 12 }).map((_, idx) => (
                                <Col className="px-auto">
                                    <Card className="card-temp" style={{ width: '20rem', height: '14rem' }}>
                                        <Card.Body>
                                            <Card.Title className="sheet-title mb-3">Card title</Card.Title>
                                            <Card.Subtitle className="sheet-subtitle mb-3 text-muted">Total Questions: xx</Card.Subtitle>
                                            <Card.Subtitle className="sheet-subtitle mb-4 text-muted">{cardsSubtitle}</Card.Subtitle>
                                            <ProgressBar className="mb-2" now={progress} variant={guess} label={`${progress}%`} />
                                            <div className="d-flex justify-content-end">
                                                <Button className="h3 border-0 mx-2 my-2 font-weight-medium" variant={guessBtn}><strong>{btnText}</strong></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </div>  
            </Row>
        </div>
        
    )
}

export default DashboardQ
