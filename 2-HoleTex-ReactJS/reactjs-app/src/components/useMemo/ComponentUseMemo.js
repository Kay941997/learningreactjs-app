import React, {useState, useMemo} from 'react';

function expensiveFunction(number) {
    console.log('Bat dau useMemo');

    console.log('Component React.useMemo - render');

    const start = new Date();

    //wait 3s:
    while((new Date() - start) < 3000);

    console.log('Ket thuc useMemo', new Date() - start, 'ms');
    
    return number * number;
}
export default function ComponentUseMemo() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(20);

    const number = useMemo(() => { //!useMemo
        return expensiveFunction(num); 
    }, [num]) 

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> Add </button>

            <p>Number: {number}</p>
        </>
    )
}
