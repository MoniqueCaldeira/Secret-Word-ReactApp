import './StartScreen.css'
import logo from "../assets/Start_logo-01.png"

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Roda Roda</h1>
      <img className="logo" src={logo}/>
      <p>Clique no botão abaixo para começar a jogar!</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen