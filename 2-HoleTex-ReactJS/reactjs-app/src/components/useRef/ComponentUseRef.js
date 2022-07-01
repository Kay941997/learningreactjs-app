import React, {useRef} from 'react';
import { useState } from 'react';

function ComponentUseRef() {
    const countRef = useRef(0); //!useRef - lúc render giữ lại giá trị trước đó, ko tạo lại giá trị
    const [countState, setCountState] = useState(0); //!useState khác useRef, khi giá trị thay đổi, useState render lại, useRef ko render lại
    const obj = { //!obj khác useRef vì lúc render sẽ tạo lại giá trị ban đầu mới là 0
        current: 0
    }

    const handleClick = () => { //!so sánh cả 3 phương án useRef, obj, useState:
        setCountState(countState + 1); //todo: useState - thay đổi giá trị sẽ render lại
        countRef.current = countRef.current + 1; //todo: useRef - thay đổi giá trị sẽ ko render lại
        obj.current = obj.current + 1; //todo: obj - tạo lại giá trị ban đầu = 0
    }

    console.log({
        countState,
        countRef
    })

    return (
        <button onClick={handleClick}>Click Button</button>
    )
}

export default ComponentUseRef;
