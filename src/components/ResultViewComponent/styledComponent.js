import styled from 'styled-components'

export const ResultsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 100%;
`

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 676px) {
    width: 60%;
  }
`

export const ImageContainer = styled.div`
  text-align: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  font-size: 25px;
  @media screen and (min-width: 676px) {
    font-size: 30px;
  }
`
export const UserImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (min-width: 676px) {
    height: 200px;
    width: 200px;
  }
`

export const Status = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  font-size: 25px;
  margin-top: 20px;
  @media screen and (min-width: 676px) {
    font-size: 35px;
  }
`

export const PlayAgainButton = styled.button`
  height: 45px;
  width: 180px;
  background-color: white;
  border-radius: 15px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
`
