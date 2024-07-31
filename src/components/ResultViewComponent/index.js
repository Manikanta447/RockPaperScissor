import {
  ResultsMainContainer,
  ResultsContainer,
  ImageContainer,
  Heading,
  UserImage,
  Status,
  PlayAgainButton,
} from './styledComponent'

const ResultViewComponent = props => {
  const {userInput, computerInput, choicesList, func} = props

  const filteredUserList = choicesList.filter(
    eachList => eachList.id === userInput,
  )
  const usersChoice = filteredUserList[0].id

  const filteredComList = choicesList.filter(
    eachList => eachList.id === computerInput,
  )
  const comChoice = filteredComList[0].id

  let status
  const condition =
    (usersChoice === 'Rock' && comChoice === 'SCISSORS') ||
    (usersChoice === 'PAPER' && comChoice === 'ROCK') ||
    (usersChoice === 'SCISSORS' && comChoice === 'PAPER')
  if (usersChoice === comChoice) {
    status = 'IT IS DRAW'
  } else if (condition) {
    status = 'YOU WON'
  } else {
    status = 'YOU LOSE'
  }

  const oneMoreRound = () => {
    func()
  }

  return (
    <ResultsMainContainer>
      <ResultsContainer>
        <ImageContainer>
          <Heading>YOU</Heading>
          <UserImage src={filteredUserList[0].imageUrl} alt="your choice" />
        </ImageContainer>
        <ImageContainer>
          <Heading>OPPONENT</Heading>
          <UserImage src={filteredComList[0].imageUrl} alt="opponent choice" />
        </ImageContainer>
      </ResultsContainer>
      <Status>{status}</Status>
      <PlayAgainButton type="button" onClick={oneMoreRound}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultsMainContainer>
  )
}

export default ResultViewComponent
