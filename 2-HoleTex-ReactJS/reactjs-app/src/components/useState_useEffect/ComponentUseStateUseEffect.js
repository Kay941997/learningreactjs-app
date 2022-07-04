import React, { useState, useEffect } from 'react';

export default function ComponentUseStateUseEffect() { //!Funtional Component (Vote dùng)
    console.log('component useEffect - render')

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
        console.log("Scroll")
    }

    const [count0, setCount0] = useState(() => { //!useState
        return initalValues() //todo: lưu ý khi khai báo giá trị cho State, dùng arrow thì function bên trong sẽ ko bị lặp lại
    });

    const [count, setCount] = useState(0); //!useState
    const [user, setUser] = useState({ //!useState
        name: 'test Name',
        age: 12,
    })
    const [action, setAction] = useState(''); //!useState
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => { //!hook useEffect
        //todo: componentDidMount - thực hiện 1 lần duy nhất, không truyền dependency vào []
        //todo: componentDidUpdate - truyền dependency vào []
        document.title = `You clicked ${count} times`;

        //todo: cleanup function:
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
            //todo: componentWillUnmount - để làm nhẹ đi performance
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
