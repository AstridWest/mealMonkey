import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Spinner from "./Spinner";

const TheMeal = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => {
            setCategories(response.data.categories)
            setLoading(false)
            })
        
    }, []);

    return loading ? <Spinner /> : (  //loading kan skiftes ud med en loading "spinner"
        <>
            <h3>the meal</h3>
            {categories.map(category => (
                <Link key={category.idCategory} to={`/${category.strCategory}`}>
                <p>{category.strCategory}</p>
                </Link>
                
            ))}
        </> 
    );
}
 
export default TheMeal;