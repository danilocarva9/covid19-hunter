import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';

export default class Global extends Component {


    state = {
        global: {},
    }
    async componentDidMount(){
      this.loadGlobal();
    }

    loadGlobal = async () => {
        const response = await api.get('/summary');
        this.setState({ 
            global: response.data.Global 
        });
    }

    render(){

        const { global } = this.state;

        return (
            
            <Card>
            <Card.Header>Global</Card.Header>
            <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Col><h5>Confirmed</h5>{global.TotalConfirmed}</Col>
                        <Col><h5>Recovered</h5>{global.TotalRecovered}</Col>
                        <Col><h5>Deaths</h5>{global.TotalDeaths}</Col>
                    </Row>
                </Container>
            </Card.Text>
            </Card.Body>
            </Card>


        )
    }
}
