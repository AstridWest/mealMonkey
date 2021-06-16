import { useEffect, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);//useState(parseInt(localstorage.getItem(myCount)) || 0);
    
    useEffect(() => {
        //localstorage.setItem("myCount", count)
    }, [count]);

    let countUp = () => {
        count <15 && setCount(count + 1) //&& er if
        //localstorage.setItem("myCount", count)
    };

    let countDown = () => {
        count > 0 && setCount(count - 1)
        //localstorage.setItem("myCount", count)
    };

    return ( 
        <>
            <h2>{ count }</h2>
            <button onClick={countUp}>Count up!</button>
            <button onClick={countDown}>Count down!!</button>
        </>
     );
}
 
export default Counter;
