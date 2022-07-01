import React, {useState, useEffect} from 'react'

export default function ChildComponent({getData}) {
    const [comments, setComments] = useState([]);
    console.log('Child Component React.useCallback - render')

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
            <p>Child Component useCallback</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}
