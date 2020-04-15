import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Col, Row, Button,Card } from 'react-bootstrap';
import './styles.css';

export default class Main extends Component {

    state = {
        countries: [],
    }
    componentDidMount(){
        this.loadCountries();
    }

    loadCountries = async () => {
        const response = await api.get('/summary');
        this.setState({ countries: response.data.Countries });
    }

    render(){

        const { countries } = this.state;
        
        return (
        <div>
       
        <Container fluid className="container_margin">
        <Row>
        <Col xs={10}>
       
       
            <Card>
            <Card.Header>Brazil</Card.Header>
            <Card.Body>
            <Card.Title>Dados da Covid-19</Card.Title>
            <Card.Text>

            <Container>
            <Row>
            <Col>Total de Casos <h3>23443</h3></Col>
            <Col>Total de Mortes <h3>23443</h3></Col>
            <Col>Novos Casos <h3>23443</h3><small>2020-04-15T13:14:29Z</small></Col>
            </Row>
            </Container>

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </Col>


        <Col xs={2}>
            <div className="countries-list">
           
            <Card>
            <Card.Header>Countries ({countries.length})</Card.Header>
            <Card.Body>
          
            {countries.map(country => (
                <div>
                 <Card.Title><a href="#">{country.Country}</a></Card.Title>
                 <Card.Text>
                <p>
                Confirmed Cases: {country.TotalConfirmed} <br/>
                Deaths: {country.TotalDeaths}
                </p>
                 </Card.Text>
                <hr/>
                 </div>
             ))}


            </Card.Body>
            </Card>

            </div>
        </Col>
        </Row>


        </Container>

        </div>
        )
    }
}