import styled from 'styled-components'

export const WeatherSummaryWrapper = styled.div`
    height: auto;
    width: auto;
    color: #FFFFFF;
`

export const LocationNameWrapper = styled.h1`
    display: flex;
    width: 100%;
    font-size: 1.8rem;
    justify-content: left;
`

export const WeatherEntryWrapper = styled.p`
    display: flex;
    width: 100%;
    font-size: 1.1rem;
    justify-content: left;
    margin-bottom: 1rem;
`
export const WeatherListWrapper = styled.ol`
    display: flex;
    font-size: 1.1rem;
    justify-content: left;
`
export const SearchResultsWrapper = styled.div`
    font-size: 1.2rem;
    justify-content: right;
`
export const SearchResultsHover = styled.tr`
    justify-content: right;
    background-color: white;
    &:hover {
        background-color: lightblue;
    }
`


export const AppAboutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    margin-bottom: 1rem;
`

export const AboutAppText = styled.p`
    font-size: 1.1rem;
    color: #000000;
    margin: auto;
    width: 50%;
`

export const WeatherSearchButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;