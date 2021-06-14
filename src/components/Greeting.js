import Icon from "./Icon";

const Greeting = ({name}) => {
    return ( 
        <>
        <div>
        <h2>Good morning {name}!</h2> <Icon />
        </div>
        </>
     );
}
 
export default Greeting;