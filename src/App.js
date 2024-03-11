import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/accordian'
import RandomColor from './components/RandomColor/RandomColor'
import StarRating from './components/StarRating/StarRating';
function App() {
  return (
    <div className="App">
      {/* Accoardian */}
      {/* <Accordian/> */}
      {/*random Color*/}
      {/* <RandomColor/> */}
      <StarRating numberOfStars = {5}/>
    </div>
  );
}

export default App;
