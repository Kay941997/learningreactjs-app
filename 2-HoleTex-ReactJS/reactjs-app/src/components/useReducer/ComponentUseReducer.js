import React, { useReducer } from 'react'

const reducer1 = (state, action) => {
    switch(action) {
        case 'TANG':
            return state + 1;
        case 'GIAM':
            return state - 1;
        case 'XOA TAT CA':
            return 0;
        default:
            return state;
    }
};

const reducer2 = (state, action) => {
    switch(action.type) {
        case 'GAN GIA TRI':
            return action.data;
        default:
            return state;
    }
}

const initStateUser = {
    loading: false,
    date: [],
    error: null
}

const userReducer1 = (state, action) => {
    switch(action.type) {
        case 'GET USER REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'GET USER SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case 'GET USER ERROR':
            return {
                ...state,
                data: [],
                error: action.data,
            }
        default:
            return state;
    }
}

export default function ComponentUseReducer() {
    const [count1, dispatch1] = useReducer(reducer1, 0);
    const [count2, dispatch2] = useReducer(reducer2, 0); 
    const [user1, userDispatch1] = useReducer(userReducer1, initStateUser );

    const getUsers = () => {
        userDispatch1({
            type: 'GET USER REQUEST'
        });

        setTimeout(() => {
            fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                userDispatch1({
                    type: 'GET USER SUCCESS',
                    data: res,
                });
            })
            .catch(err => {
                userDispatch1({
                    type: 'GET USER ERROR',
                    data: err,
                })
            })
        }, 2000)
         
    }


    return (
        <>
            <p>Count1: {count1}</p>
            <button onClick={() => dispatch1('TANG')}>Tang</button>
            <button onClick={() => dispatch1('GIAM')}>Giam</button>  
            <button onClick={() => dispatch1('XOA TAT CA')}>Xoa het du lieu</button>  

            <p>Count2: {count2}</p>
            <button onClick={() => dispatch2({
                type: 'GAN GIA TRI',
                data: 10
            })}>Gan gia tri</button>

            <p>User1:</p>
            <button onClick={getUsers}>Get Users</button>
            {user1.loading ? <p>Loading...</p> : <p>{JSON.stringify(user1)}</p> }
        </>
    );
}

/* 
    useReducer: phải nắm khái niệm ACTION - VIEW - REDUCERS
    
    ACTION 'ADD_NEW_ITEM'

    VIEW: Nhấn lên 1 button dispatch('ADD_NEW_ITEM')

    REDUCERS (state, action) => {
        switch(action) {
            case 'ADD_NEW_ITEM':
                state = state + 1;
            case 'ABC':
        }
    }
*/
