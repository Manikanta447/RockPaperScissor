import styled from 'styled-components'

export const MainBgContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 676px) {
    padding: 50px;
  }
`

export const ScoreContainer = styled.div`
  width: 100%;
  border: 2px solid white;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
  border-radius: 15px;
  @media screen and (min-width: 676px) {
    width: 80%;
    padding: 45px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

export const MainHeading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: left;
`

export const MainPara = styled.div`
  height: 120px;
  width: 120px;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  font-size: 27px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 676px) {
    width: 160px;
  }
  flex-shrink: 1;
`
export const SpanEle = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  margin: 0px;
`

export const SpanEle2 = styled(SpanEle)`
  font-size: 35px;
`

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 676px) {
    width: 70%;
  }
`

export const ListItem = styled.li`
  text-align: center;
  width: 40%;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const ChoiceButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
`
export const TriggerButton = styled.button`
  height: 50px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-weight: bold;
  font-size: 20px;
  align-self: flex-end;
`

export const ModalContainer = styled.div`
  text-align: right;
  width: 100%;
  padding: 10px;
`

export const CloseButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 90%;
  height: 300px;
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
`
