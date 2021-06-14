import './App.scss';
import Greeting from './components/Greeting';
import Categories from './components/Categories';

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
    </>
  );
}

export default App;
