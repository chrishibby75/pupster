import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return(
        <div>
            <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>Pupster</h1>
            <h2>They're the Good Boys and Girls</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                <h1>Welcome to Pupster</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                <p>Dogs are super awesome.</p>
                <p>Dogs are better than cats.</p>
                <p>Adopt a dog instead of going to a terrible puppy mill!</p>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default About;