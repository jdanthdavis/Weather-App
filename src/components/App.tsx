import React, {FC, useState} from 'react';
import {
  WeatherAppWrapper,
  SectionHeading,
  AppAboutWrapper,
  AboutAppText
} from './App.elements';
import {LocationSearch} from "./LocationSearch";
import {LocationTable} from "./LocationTable";
import {WeatherLocation} from "../model/Weather";
import {searchLocation} from "../services/WeatherService";
import {ErrorAlert, WarningAlert} from "./Alerts";
import {WeatherSummary} from "./WeatherSummary";

const App: FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }
  

  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <WeatherAppWrapper>
      <SectionHeading>Weather App</SectionHeading>
        <AppAboutWrapper>
          <AboutAppText>
            This is my weather app that utilizes OpenWeather's API to pull the current and
            forecast of any location you input. The search feature also checks for invalid locations and duplicate inputs.
            Once you search for your location simply click on your location's name to load the current weather and forecasts!
          </AboutAppText>
        </AppAboutWrapper>
      
        <LocationSearch onSearch={addLocation}/>
        <ErrorAlert message={error}/>
        <WarningAlert message={warning}/>
        <LocationTable locations={locations}
                      current={currentLocation}
                      onSelect={location => setCurrentLocation(location)}/>
        <WeatherSummary location={currentLocation}/>

    </WeatherAppWrapper>
  );
};

export default App;