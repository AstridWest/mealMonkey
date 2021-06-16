const Categories = ({categoryname, imagesrc}) => {
    return ( 
        <>
        <div className="categories__items">
        <img src={imagesrc} alt="Food that fits the category" className="image" width="60em" height="60em"></img>
        <h3>{categoryname}</h3>
        </div>
        </>
     );
}
 
export default Categories;