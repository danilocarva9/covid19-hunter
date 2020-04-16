import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';

export default class Country extends Component {

    state = {
        country_current: {},
        country_last3days: [],
    }

    async componentDidMount(){
        const { id } = this.props.match.params; //Country slug
        const response = await api.get(`live/country/${id}`);

        if(this.state.date != response.data){
            this.setState({ 
                country_last3days: response.data,
                country_current: response.data[3]
            });
        }

        
        console.log("didMount "+id);
    }

    render(){

        const { country_last3days } = this.state;
        const { country_current } = this.state;
        console.log("renderizou: "+this.state);
       
        return (
            <div>
            <Card>
            <Card.Header>{country_current.Country}</Card.Header>
            <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Col>Confirmed<h1> {country_current.Confirmed}</h1></Col>
                        <Col>Recovered <h1>{country_current.Recovered}</h1></Col>
                        <Col>Deaths <h1>{country_current.Deaths}</h1></Col>
                    </Row>
                </Container>
            </Card.Text>
             <hr/>
             <h5>Last 3 days</h5>

            <ListGroup>
               {country_last3days.map(c => (
                    <ListGroup.Item key={c.Date}>{c.Date} - {c.Confirmed} Confirmed, {c.Recovered} Recovered, {c.Deaths} Deaths </ListGroup.Item>
                ))} 
            </ListGroup>
         

            </Card.Body>
            </Card>

            
            </div>
           
        )
    }
}
