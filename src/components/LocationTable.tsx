import {
  LocationTableWrapper,
  SectionHeading,
  SearchResultsWrapper,
  SearchResultsHover
} from './LocationTable.elements'
import React, {FC} from "react";
import {WeatherLocation} from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({locations, onSelect, current}) =>
  <LocationTableWrapper>
    <SectionHeading>
      Searched Locations:
    </SectionHeading>
      <SearchResultsWrapper>
        <tbody>
          {locations.map(location =>
            <SearchResultsHover key={location.id}
                className={current?.id === location.id ? 'table-primary' : ''}
                onClick={() => onSelect(location)}>
              <td>{location.name}</td>
            </SearchResultsHover>
          )}
        </tbody>
      </SearchResultsWrapper>
    
  </LocationTableWrapper>;