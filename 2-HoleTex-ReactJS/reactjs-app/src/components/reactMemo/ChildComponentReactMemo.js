import React from 'react'

function ChildComponentReactMemo() {
    console.log('Child Component React.Memo - render')
    return (
        <p>Child Component React.Memo</p>
    )
}

// export default React.memo(ChildComponentReactMemo); //!React.memo (đã custom component ở parent nên ko cần React.memo ở child)

export default ChildComponentReactMemo;
