import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Route, Link, HashRouter} from "react-router-dom";
import Country from '../../pages/country';
import Global from '../../pages/global';
import './styles.css';

export default class Main extends Component {

    state = {
        countries: [],
        countryFilter: '',
    }
    async componentDidMount(){
      this.loadCountries();
    }

    loadCountries = async (filtered_value = null) => {

        console.log(filtered_value);
        const response = await api.get('/summary');
     

        this.setState({ countries: response.data.Countries });
    }


    handleChange = (e) => {
        
        if(e.target.value){
            this.loadCountries(e.target.value);
        }
       
        // console.log(e.target.value);

        // const filtered = _.filter(jedi, (item) => {
        //     return item.name.indexOf(searchfield) > -1
        //  })

        // console.log(filtered);        
    }
    
    render(){

        const { countries } = this.state;
        
        return (
        <HashRouter>
        <div>
        <Container fluid className="container_margin">
        <Row>
        <Col xs={10}>
            <div className="content">
             <Route exact path="/" component={Global} /> 
             <Route path="/country/:id" strict component={Country} />
            </div>
        </Col>


        <Col xs={2}>
                
                <div>
                <label htmlFor="filter">Search Country: </label>
                <input type="text" id="filter" 
                value={this.state.countryFilter} 
                onChange={this.handleChange}/>
                </div>
            
            <div className="countries-list">
            <Card>
            <Card.Header>Countries ({countries.length})</Card.Header>
            <Card.Body className="bodyScroll">
            {countries.map(country => (

                country.TotalConfirmed > 0 ?
                    <div key={country.Slug}>
                    <Card.Title>
                    <Link to={`/country/${country.Slug}`}>{country.Country}</Link>
                    </Card.Title>
                    <Card.Text>
                    Confirmed Cases: {country.TotalConfirmed} <br/>
                    Deaths: {country.TotalDeaths}
                    </Card.Text>
                    <hr/>
                    </div>
                 :
                    ''
             ))} 

                {/* <div key="Brazil">
                <Card.Title>
                <Link to={`/country/Brazil`}>Brazil</Link>
                </Card.Title>
                <Card.Text>
                Confirmed Cases: 123 <br/>
                Deaths: 123
                </Card.Text>
                <hr/>
                </div>

                <div key="Argentina">
                <Card.Title>
                <Link to={`/country/Argentina`}>Argentina</Link>
                </Card.Title>
                <Card.Text>
                Confirmed Cases: 123 <br/>
                Deaths: 123
                </Card.Text>
                <hr/>
                </div> */}
             
            </Card.Body>
           
            </Card>
            </div>
        </Col>
        </Row>
        </Container>
        </div>
        </HashRouter>
        )
    }
}