import './App.scss';
import Greeting from './components/Greeting';
import Categories from './components/Categories';
import Restaurents from './components/Restaurents';
//import Counter from './components/Counter';
//import TheMeal from './components/TheMeal';
import Meals from "./components/Meals";
import {Router} from "@reach/router";
import Styled from './components/Styled';
import MenuCat from './components/MenuCat';

function App() {
  return (
    <>
    <Router>
      <Styled path="styled" />
      <MenuCat path="test" />
      <Meals path="/:category" />
    </Router>

    <Greeting name="Akila"/>

     <div className="categories">
     <Categories categoryname="Offers" imagesrc="https://source.unsplash.com/featured/?food" />
     <Categories categoryname="Sri Lankan" imagesrc="https://source.unsplash.com/featured/?food,srilankan" />
     <Categories categoryname="Italian" imagesrc="https://source.unsplash.com/featured/?food,italian" />
     <Categories categoryname="Indian" imagesrc="https://source.unsplash.com/featured/?food,indian" />
     </div>

     <div>
      <Restaurents bigimage="https://source.unsplash.com/featured/?food,western" restname="Minute by tuk tuk" describ="4.9 (124 ratings) Café  Western Food" />
      <Restaurents bigimage="https://source.unsplash.com/featured/?food,brunch" restname="Café de Noir" describ="4.9 (124 ratings) Café  Western Food" />
      <Restaurents bigimage="https://source.unsplash.com/featured/?food,bakery" restname="Bakes by Tella" describ="4.9 (124 ratings) Café  Western Food" />
     </div> 

    </>
  );
}

export default App;

/* 

    <TheMeal path="/" />
     <Counter />
     <TheMeal />
     */
