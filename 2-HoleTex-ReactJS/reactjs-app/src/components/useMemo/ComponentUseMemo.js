import React, {useState, useMemo} from 'react';

function expensiveFunction(number) {
    console.log('Bat dau useMemo');

    console.log('component useMemo - render');

    const start = new Date();

    //wait 3s:
    while((new Date() - start) < 1000);

    console.log('Ket thuc useMemo', new Date() - start, 'ms');
    
    return number * number;
}
export default function ComponentUseMemo() {
    //!useMemo ghi nhớ lại kết quả trả về, nếu dữ liệu ko thay đổi thì ko thực thi lại nữa, lấy từ trong bộ nhớ ra:
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
