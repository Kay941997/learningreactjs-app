import React from 'react'
import { useState } from 'react';
import ChildComponentReactMemo from './ChildComponentReactMemo';
import { useCallback } from 'react';

function Counter() { //!custom function làm component để tối ưu hóa ko sử dụng React.memo ở component child
    const [count, setCount] = useState(0)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>
    )
}

export default function ComponentReactMemo() { //!React.Memo (khác hook React.useMemo)
    console.log('parent component React.Memo - render')

    // const [count, setCount] = useState(0); //-> chuyển sang custom function

    const [name, setName] = useState('David');

    const getUsers = useCallback(() => {
        //todo: có function cho component child 
        //todo: -> sử dụng React.Memo(ở child) kết hợp React.useCallback(ở parent), để ko render lại component child
        return fetch(`https://reqres.in/api/users`);
    }, []);

    return (
        <>
            {/* <p>Count: {count}</p> //-> chuyển sang custom function
            <button onClick={() => setCount(count + 1)}>Add</button> */}
            <Counter></Counter>

            <ChildComponentReactMemo name={name} getUsers={getUsers}></ChildComponentReactMemo>
        </>
    )
}
