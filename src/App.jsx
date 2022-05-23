
import './App.css';
import "./sass/app.scss";

import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: "Albuquerque",
      forcastDays: 5,
      isLoading: true,
    };
  }

  componentDidMount() {

    const { cityName, forcastDays } = this.state;
    const params = {
      access_key: "5d7f49d7c289a4941a96d2c4ae3c5cbf",
      query: "Albuquerque",
    }

    axios.get('http://api.weatherstack.com/current', { params }).then((res) => {
      return res.data;
    }).then((data) => {
      this.setState({
        isLoading: false,
        temperature: data.current.temperature,
        weather_descriptions: data.current.weather_descriptions,
        weather_icons: data.current.weather_icons
      })
    }).catch((err) => {
      if (err) {
        console.error("Cannot fecth weather data from api,", err);
      }
    })

  }

  render() {
    const { isLoading, cityName, temperature, weather_descriptions, weather_icons } = this.state;
    return (
      <div className="app-container" >
        <div className='main-container'>
          {isLoading && <h3>Requesting weather data...</h3>}
          {!isLoading && (
            <div className="top-section">
              <TopSection location={cityName} temperature={temperature} weather_descriptions={weather_descriptions} weather_icons={weather_icons} />
            </div>
          )}
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
