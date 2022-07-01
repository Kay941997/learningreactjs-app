# SPA:
- REACTJS là 1 library SPA - SinglePageApplication
- SPA nhanh hơn khi sử dụng
- Lần tải đầu là tải tất cả, nên phải bump nhỏ ra tải cho nhanh
- Chỉ tải thêm dữ liệu mới khi cần
- Có source code Front-end riêng biệt
# MPA:
- MultiPageApplication
- MPA chậm hơn khi sử dụng
- Tải toàn bộ trang khi truy cập
- Mô hình MVC, phụ thuộc nhau nhiều
# SEO:
- SPA ko thân thiện SEO như MPA, phải thêm SEO 

####################################LÝ THUYẾT####################################
# Settings:
$ npx create-react-app . (Tạo app)
$ npm start (Chạy app)

$ npm i @atlaskit/button @atlaskit/textfield @atlaskit/icon (Optional) (Thêm package atlassian)
$ npm i uuid (Optional) (uuid dành cho id)

# useState - React Hook, dữ liệu nội tại của component hiện tại, người dùng nhập vào
    - const [ toDoList, setTodoList ] = useState([]);
    - const [num, setNum] = useState(0);
# props - các dữ liệu được truyền từ phía bên ngoài: <ToDoList toDoList = { toDoList } />
# useEffect - React Hook, thực hiện gọi API, thêm/xóa các event listener, thao tác DOM trực tiếp, gọi Web APIs setTimeout, setInterval, dùng để load dữ liệu từ localStorage, Database:
    - componentDidMount - thực hiện 1 lần duy nhất, không truyền dependency vào []
    - componentDidUpdate - truyền dependency vào [], hoạt động giống như 1 lifecycle
    - componentWillUnmount - để làm nhẹ đi performance
        +       useEffect(() => { //!hook useEffect
                    document.addEventListener('scroll', handleScroll)
                    
                    return () => {
                        //componentWillUnmount - để làm nhẹ đi performance
                        document.removeEventListener('scroll', handleScroll)
                    };
                }, [])
    - truyền giá trị [todoList, textInput] thì khi giá trị thay đổi, useEffect sẽ chạy lại
# useMemo - React Hook, tăng perfomance nhưng cần bộ nhớ nên ko được dùng tùy tiện
    -   const [num, setNum] = useState(20);
        const number = useMemo(() => {
            return expensiveFunction(num); 
        }, [num]) 
# useCallback - React Hook, chỉ dùng khi component child chứa function của component parent, dùng để tránh render lại web cả parent lẫn child, không lạm dụng vì sẽ tăng bộ nhớ

# React.memo - khác hook useMemo, cũng tốn dung lượng, chỉ sử dụng khi component parent có props, để tối ưu hóa ko cần sử dụng React.memo ở component child -> ta custom 1 function làm component ở component parent rồi gắn vào trong component parent
 
# useRef - React Hook, giúp lưu trữ 1 tham chiếu, và để truy xuất các thành phần DOM



####################################THỰC HÀNH####################################
###### F8 Ôn lại ES6+:
# (Đã xong) Arrow Function
# (Đã xong) Enhanced Object Literals
# (Đã xong) Destructuring, Rest (định nghĩa tham số, khác Spread), Spread Operator (truyền đối số, khác Rest)
# (Đang học) JS modules (import, export)
    - Tạo file test-module.js


###### HoleTex -Học ReactJS 30 Phút:
# useEffect: (thực hiện gọi API, thêm/xóa các event listener)
- ComponentUseStateUseEffect.js:
import React, { useState, useEffect } from 'react';
export default function ExampleFunctionalUseStateEffect() { //!Funtional Component (Vote dùng)
    const initalValues = () => {
        let total = 0;
        for (let i=0; i<1000; i++) {
            total += i;
        }
        console.log('initialValues');
        return total;
    }
    const handleClick = () => {
        setCount(count + 1);
        setUser({name: 'updated Name'})
    };
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }
    const [count0, setCount0] = useState(() => { //!useState
        return initalValues() //!lưu ý khi khai báo giá trị cho State, dùng arrow function để ko bị lặp lại
    });
    const [count, setCount] = useState(0); //!useState
    const [user, setUser] = useState({ //!useState
        name: 'test Name',
        age: 12,
    })
    const [action, setAction] = useState(''); //!useState
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => { //!hook useEffect
        //componentDidMount - thực hiện 1 lần duy nhất, không truyền dependency vào []
        //componentDidUpdate - truyền dependency vào []
        document.title = `You clicked ${count} times`;
        //cleanup function:
        return () => {
            console.log('useEffect - count - cleanup');
        }
    }, [count]); //todo: dùng gì thì xài dependency đấy
    useEffect(() => { //!hook useEffect
        fetch(`https://reqres.in/api/${action}`)
            .then((res) => console.log({res}))
            .catch((err) => console.log(err));
    }, [action]) //todo: khi click button setAction bên dưới sẽ thay đổi thành http://reqres.in/api/comments
    useEffect(() => { //!hook useEffect
        document.addEventListener('scroll', handleScroll)
        
        return () => {
            //componentWillUnmount - để làm nhẹ đi performance
            document.removeEventListener('scroll', handleScroll)
        };
    }, [])
    return (
        <div style={{ height: '500px' }}>
            <pre>Functional Component</pre>
            <p>You clicked {count} times</p>
            <p>{JSON.stringify(user)}</p>
            <button onClick={handleClick}>setCount + setUser with handleClick</button>
            <button onClick={() => setCount(count + 1)}>setCount</button>
            <button onClick={() => setAction('commentsUseEffect')}>setAction</button>
            <p style={{position: 'fixed', bottom: '20px', left: '20px'}}>{scrollPosition}</p>
        </div>
    )
}

- App.js:
return (
    <>
        <ComponentUseStateUseEffect></ComponentUseStateUseEffect>
    </>
)

# useMemo: (tăng perfomance nhưng cần bộ nhớ nên ko được dùng tùy tiện)
- ComponentUseMemo.js:
import React, {useState, useMemo} from 'react';

function expensiveFunction(number) {
    console.log('Bat dau useMemo');
    const start = new Date();

    //wait 3s:
    while((new Date() - start) < 3000);

    console.log('Ket thuc useMemo', new Date() - start, 'ms');
    
    return number * number;
}
export default function ComponentUseMemo() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(20);

    const number = useMemo(() => {
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

- App.js:
return (
    <>
        <ComponentUseMemo></ComponentUseMemo>
    </>
)

# useCallback: (chỉ dùng khi component child chứa function của component parent)
- ComponentUseCallback.js:
import React, {useState, useCallback} from 'react'
import ChildComponent from './ChildComponent';

export default function ComponentUseCallback() {
    const [users, setUsers] = useState([]);

    // const getData = (type) => { //!sinh ra cả child commentsCallback(chứa function của parent) và parent usersCallback
    //     return fetch(`https://reqres.in/api/${type}`);
    // }

    const getData = useCallback((type) => { //!sinh ra duy nhất parent usersCallback, tránh render cả parent lẫn child
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
            <ChildComponent getData={getData}>Get Comments Data</ChildComponent>
        </>
    )
}

- ChildComponent.js:
import React, {useState, useEffect} from 'react'

export default function ChildComponent({getData}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getData('commentsCallback')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments);
            });
    }, [getData]);

    return (
        <div>
            <p>Child Component</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}


- App.js:
return (
    <>
        <ComponentUseCallback></ComponentUseCallback>
    </>
)

# React.memo: (để tối ưu hóa ko cần sử dụng React.memo ở component child -> ta custom 1 function làm component ở component parent rồi gắn vào trong component parent)
- ComponentReactMemo.js:
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
    console.log('Component React.Memo - render')

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

- ChildComponentReactMemo.js:
import React from 'react'

function ChildComponentReactMemo() {
    console.log('Child Component React.Memo - render')
    return (
        <p>Child Component React.Memo</p>
    )
}

// export default React.memo(ChildComponentReactMemo); //đã custom component ở parent nên ko cần React.memo ở child

export default ChildComponentReactMemo;

- App.js:
return (
    <>
        <ComponentReactMemo></ComponentReactMemo>   
    </>
)


# Code:
- Todo.js:
    + phim tat rfc
    import Button from '@atlaskit/button'
    import React from 'react'
    import styled from 'styled-components'

    const ButtonStyled = styled(Button)`
        margin-top: 5px;
        text-align: left;
    `;

    export default function Todo({ todo }) {
        return <ButtonStyled shouldFitContainer>{ todo.name }</ButtonStyled>
    }


- TodoList.js:
    + phím tắt rfc
    + add Todo
    import React from 'react';
    import Button from '@atlaskit/button';
    import Todo from './Todo';

    export default function ToDoList({ toDoList }) {
        return (
            <>
                {toDoList.map(todo => 
                    <Todo todo = {todo} />
                )}
            </>
        )
    }
 
 
- App.js:
    + add TodoList:
        import ToDoList from "./components/TodoList";
        import Textfield from '@atlaskit/textfield';
        import Button from '@atlaskit/button';
        import { useCallback ,useState } from "react";
        import { v4 } from 'uuid'

        function App() {
        const [ toDoList, setTodoList ] = useState([]); //!state
        const [ textInput, setTextInput ] = useState(""); //!state

        const onTextInputChange = useCallback((e) => { //!state
            setTextInput(e.target.value);
            }, []); //todo: không phụ thuộc gì thì để []

        const onAddButtonClick = useCallback((e) => { //!state
            //thêm text input vào todo list:
            setTodoList([
            ...toDoList, 
            { id: v4(), name: textInput, isCompleted: false }
            ]);
        }, [toDoList, textInput]); //todo: phụ thuộc toDoList, textInput

        return (
            <>
            <h3> Danh sach can lam </h3>
            <Textfield
                name="add-todo" 
                placeholder="Thêm việc cần làm..." 
                elemAfterInput={
                <Button isDisabled={ !textInput } appearance='primary' onClick={ onAddButtonClick }> 
                    Add 
                </Button>
                }
                css={{ padding:'2px 4px 2px' }}

                value={textInput}
                onChange={onTextInputChange}
            ></Textfield>
            <ToDoList toDoList = { toDoList } /> 
            </>
        )
        }

        export default App;

