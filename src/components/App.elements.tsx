import styled from 'styled-components'

export const WeatherAppWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const SectionHeading = styled.p`
    display: flex;
    width: 100%;
    font-weight: bold;
    font-size: 2.2rem;
    justify-content: center;
`
export const AppAboutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const AboutAppText = styled.p`
    font-size: 1.1rem;
    flex-wrap: wrap-reverse;
    margin: auto;
    width: 45%;
`

export const WeatherSearchButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;