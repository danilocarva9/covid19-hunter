import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Col, Row, Card } from 'react-bootstrap';

export default class Country extends Component {

    state = {
        country: {},
    }

    async componentDidMount(){
      
        console.log(this.props);
      // const { id } = this.props.match.params
       //this.setState({ country: id});
    }

    render(){
       // const { country } = this.state;

        return (
            <Card>
            <Card.Header>Brazil dwadw</Card.Header>
            <Card.Body>
            <Card.Title>Covid-19 Information</Card.Title>
            <Card.Text>
                {/* <Container>
                    <Row>
                        <Col>Confirmed<h3> 22</h3></Col>
                        <Col>Recovered <h3>23443</h3></Col>
                        <Col>Deaths <h3>23443</h3></Col>
                    </Row>
                </Container> */}
            </Card.Text>
            </Card.Body>
            </Card>
        )
    }
}
