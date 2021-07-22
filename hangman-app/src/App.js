import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hangman from './components/HangmanFigure';

function App() {

  // start game button
  // reset game button
  // word bank
  // number of guess
  // letter chosen
  // a space for each letter
  // hang man lives (6)

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Hangman />
      </div>

    </div>
  );
}

export default App;
