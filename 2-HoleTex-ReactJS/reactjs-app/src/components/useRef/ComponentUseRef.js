import React, {useRef} from 'react';
import { useState, useEffect } from 'react';

function ComponentUseRef() {
    console.log('component useRef - render');

    //!Bài toán 1: (useRef giữ lại giá trị trước đó, giải quyết Stale Closure)
    const countRef = useRef(0); //!useRef - lúc render giữ lại giá trị trước đó, ko tạo lại giá trị
    const [countState, setCountState] = useState(0); //!useState khác useRef, khi giá trị thay đổi, useState render lại, useRef ko render lại
    const obj = { //!obj khác useRef vì lúc render sẽ tạo lại giá trị ban đầu mới là 0
        current: 0
    }

    const handleClick = () => { //!so sánh cả 3 phương án useRef, obj, useState:
        // setCountState(countState + 1); //todo: useState - thay đổi giá trị sẽ render lại
        countRef.current = countRef.current + 1; //todo: useRef - thay đổi giá trị sẽ ko render lại
        obj.current = obj.current + 1; //todo: obj - tạo lại giá trị ban đầu = 0
    }   

    useEffect(() => { //!Vấn đề về Stale Closure khi dùng useState, đó là count ko tăng lên +1, luôn trả về 0
        setInterval(() => {
            setCountState(countState + 1);
            console.log('useState bị stale closure, count không tự tăng');
            console.log({countState});
        }, 10000);
    }, []);

    useEffect(() => { //!useRef giải quyết vấn đề Stale Closure
        setInterval(() => {
            countRef.current = countRef.current + 1;
            console.log('useRef giải quyết stale closure, count tự tăng');
            console.log({countRef: countRef.current});
        }, 10000);
    }, []);


    //!Bài toán 2: (useRef truy xuất các thành phần DOM)
    const ref = useRef(null);
    console.log(ref, 'Input text');
    useEffect(() => {
        ref.current.focus(); //tự động focus
    }, []) //[] -> gọi 1 lần duy nhất

    return (
        <>
            <input type='text' ref={ref}></input>
            <button onClick={handleClick}>Click Button</button>
        </>
    )
}

export default ComponentUseRef;
