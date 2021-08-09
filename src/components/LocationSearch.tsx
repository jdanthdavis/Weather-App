
import React, {FC, useState} from "react";
import { WeatherSearchButton } from './App.elements'

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  return (
    <div>
      <label>
        {/* Add Location */}
        <input type="text" value={locationSearch}
               onChange={e => setLocationSearch(e.target.value)}/>
      </label>
      <WeatherSearchButton
              onClick={addLocation} disabled={disableSearch}>Search
      </WeatherSearchButton>
    </div>
  );
}