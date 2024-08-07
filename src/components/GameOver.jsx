import "./GameOver.css"

const GameOver = ({retry, score, word}) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>A sua Pontuação foi:<span>{score}</span> </h2>
      <h2>A palavra era:<span>{word}</span> </h2>
      <button onClick={retry}>Recomeçar Jogo</button>
    </div>
  )
}

export default GameOver