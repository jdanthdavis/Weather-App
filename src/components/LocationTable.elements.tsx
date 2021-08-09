import styled from 'styled-components'

export const LocationTableWrapper = styled.div`
    height: auto;
    width: auto;
`

export const SectionHeading = styled.p`
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    justify-content: center;
    margin-bottom: 1rem;
`

export const SearchResultsWrapper = styled.div`
    font-size: 1.2rem;
    justify-content: center;
`
export const SearchResultsHover = styled.tr`
    justify-content: center;
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