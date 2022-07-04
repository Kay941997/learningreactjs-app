import React, {useState, useCallback} from 'react'
import ChildComponentUseCallback from './ChildComponentUseCallback';

export default function ComponentUseCallback() {
    const [users, setUsers] = useState([]);
    
    console.log('parent component useCallback - render')

    // const getData = (type) => { //!không useCallback sinh ra cả child commentsCallback(chứa function của parent) và parent usersCallback
    //     return fetch(`https://reqres.in/api/${type}`);
    // }

    const getData = useCallback((type) => { //!useCallback sinh ra duy nhất parent usersCallback, tránh render cả parent lẫn child
        return fetch(`https://reqres.in/api/${type}`);
    }, []); 

    const handleClick = () => {
        getData('usersCallback')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users);
            });
    };

    return (
        <>
            <p>Parent Component Data: </p>
            <button onClick={handleClick}>Get Users Data</button>
            <p>{JSON.stringify(users)}</p>
            <ChildComponentUseCallback getData={getData}>Get Comments Data</ChildComponentUseCallback>
        </>
    )
}
