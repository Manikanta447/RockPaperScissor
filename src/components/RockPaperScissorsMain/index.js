import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ResultViewComponent from '../ResultViewComponent'

import {
  MainBgContainer,
  ScoreContainer,
  MainHeading,
  MainPara,
  SpanEle,
  SpanEle2,
  ListContainer,
  ListItem,
  ChoiceButton,
  Image,
  TriggerButton,
  ModalContainer,
  CloseButton,
  RulesImage,
} from './StyledComponent'

class RockPaperScissorsMain extends Component {
  state = {count: 0, userInput: '', computerInput: '', resultsView: false}

  gameStarted = event => {
    console.log(event.target.alt)
    const {count} = this.state
    const {choicesList} = this.props
    const usersChoice = event.target.alt
    const comChoice = choicesList[Math.ceil(Math.random() * 3) - 1].id
    const condition =
      (usersChoice === 'Rock' && comChoice === 'SCISSORS') ||
      (usersChoice === 'PAPER' && comChoice === 'ROCK') ||
      (usersChoice === 'SCISSORS' && comChoice === 'PAPER')
    if (condition) {
      this.setState({
        count: count + 1,
        userInput: usersChoice,
        computerInput: comChoice,
        resultsView: true,
      })
    } else if (usersChoice === comChoice) {
      this.setState({
        userInput: usersChoice,
        computerInput: comChoice,
        resultsView: true,
      })
    } else {
      this.setState({
        userInput: usersChoice,
        computerInput: comChoice,
        resultsView: true,
        count: count - 1,
      })
    }
  }

  playAgain = () => {
    this.setState({
      resultsView: false,
    })
  }

  renderGame = () => {
    const {choicesList} = this.props

    return (
      <ListContainer>
        {choicesList.map(eachItem => {
          const {id} = eachItem
          let data
          if (id === 'ROCK') {
            data = 'rockButton'
          } else if (id === 'PAPER') {
            data = 'paperButton'
          } else {
            data = 'scissorsButton'
          }
          console.log(id)
          console.log(data)
          return (
            <ListItem key={eachItem.id}>
              <ChoiceButton
                type="button"
                id={eachItem.id}
                onClick={this.gameStarted}
                data-testid={data}
              >
                <Image src={eachItem.imageUrl} alt={eachItem.id} />
              </ChoiceButton>
            </ListItem>
          )
        })}
      </ListContainer>
    )
  }

  render() {
    const {resultsView, userInput, computerInput, count} = this.state
    const {choicesList} = this.props

    return (
      <MainBgContainer>
        <ScoreContainer>
          <MainHeading>
            ROCK <br /> PAPER <br /> SCISSORS{' '}
          </MainHeading>
          <MainPara>
            <SpanEle>Score </SpanEle>
            <SpanEle2>{count}</SpanEle2>
          </MainPara>
        </ScoreContainer>
        {resultsView ? (
          <ResultViewComponent
            userInput={userInput}
            computerInput={computerInput}
            choicesList={choicesList}
            func={this.playAgain}
          />
        ) : (
          this.renderGame()
        )}
        <Popup
          modal
          trigger={<TriggerButton type="button">RULES</TriggerButton>}
          overlayStyle={{
            backgroundColor: 'white',
            height: `400px`,
            width: '400px',
            padding: '10px',
            textAlign: 'right',
            margin: 'auto',
          }}
        >
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </MainBgContainer>
    )
  }
}

export default RockPaperScissorsMain
