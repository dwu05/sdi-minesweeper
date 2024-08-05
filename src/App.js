import logo from './logo.svg';
import './App.css';

function App() {
  
const makeRow = () => Array.from(Array(10), () => 'empty');

let minesweeperBoard = Array.from(Array(10), () => makeRow());

minesweeperBoard[3][5] = 'King';

console.log(minesweeperBoard)

return (
    <>
    
    </>
  );
}

export default App;
