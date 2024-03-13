import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/accordian'
import RandomColor from './components/RandomColor/RandomColor'
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LoadMore from './components/LoadMore/LoadMore';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import BreadCrumb from './components/BreadCrumbs/BreadCrumbs'
import menu from './components/BreadCrumbs/data'
import ScrollIndicator from './components/Scroll/Scroll';
function App() {
  return (
    <div className="App">
      {/* Accoardian */}
      {/* <Accordian/> */}
      {/*random Color*/}
      {/* <RandomColor/> */}
      {/* <StarRating numberOfStars = {5}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/> */}
      {/* <LoadMore/> */}
      {/* <BreadCrumbs menu={menu}/> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
