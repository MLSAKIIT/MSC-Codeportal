import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Organize } from './Organize.svg';
import { ReactComponent as Progress } from './Progress.svg';

import '../Features/Features.css'

const Features = () => {
    return (
        <div id="features">
            <Container fluid="md">
                <Row className="featureSpacing">
                    <p className="heading-one">Lorem ipsum</p>
                    <span className="body-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </Row>
                <Row className="featureSpacing">
                    <Col md={{ span: 3, order: 'last' }} className="mx-auto my-auto"><Organize /></Col>
                    <Col md={{ span: 7, order: 'first' }}><p className="inner-heading">Lorem ipsum</p>
                        <p className="inner-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec, convallis nunc. Nunc hendrerit neque nec urna lobortis, a aliquam arcu tincidunt.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md className="mx-auto my-auto"><Progress /></Col>
                    <Col md><p className="inner-heading" >Lorem ipsum</p>
                        <p className="inner-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec, convallis nunc. Nunc hendrerit neque nec urna lobortis, a aliquam arcu tincidunt.</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Features