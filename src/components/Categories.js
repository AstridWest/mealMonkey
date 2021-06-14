const Categories = ({categoryname, imagesrc}) => {
    return ( 
        <>
        <div className="categories__items">
        <img src={imagesrc} alt="Picture of food that fits the category" className="image" width="80em" height="80em"></img>
        <h3>{categoryname}</h3>
        </div>
        </>
     );
}
 
export default Categories;