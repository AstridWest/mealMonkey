const Restaurents = ({bigimage, restname, describ}) => {
    return ( 
        <>
        <div className="restaurents">
        <img src={bigimage} alt="Food from Restaurents" className="restaurents__image" width="100%" height="200em"></img>
        <h2 className="restaurents__header">{restname}</h2>
        <p className="restaurents__text">{describ}</p>
        </div>
        </>
     );
}
 
export default Restaurents;