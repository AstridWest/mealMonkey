import './App.scss';
import Greeting from './components/Greeting';
import Categories from './components/Categories';
import Restaurents from './components/Restaurents';

function App() {
  return (
    <>
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
