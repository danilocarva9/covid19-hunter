import React, { Component } from 'react';
import api from '../../services/api';

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
        <h3>{countries.length} países com casos de covid-19.</h3>
        
        <div className="countries-list">
          <ul>
          {countries.map(country => (
                <li key={country.Country}>{country.Country} </li>
          ))}
          </ul>
        </div>

        </div>
        )
    }
}