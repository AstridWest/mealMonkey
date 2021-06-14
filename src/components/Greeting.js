import Icon from "./Icon";

const Greeting = ({name}) => {
    return ( 
        <>
        <div className="greeting">
        <h2 className="greeting__header">Good morning {name}!</h2> <Icon className="greeting__icon" />
        </div>
        </>
     );
}
 
export default Greeting;