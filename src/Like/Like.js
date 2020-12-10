import './Like.css'
import React, { useState } from 'react'

function Like(props) {

    const [count, setCount] = useState(0)

    return (
        <div className="Like">
            <div onClick={() => { if (count > 0) { setCount(count - 1) } }} className="thumbUp">👎</div>
            <h1>{count}</h1>
            <div onClick={() => setCount(count + 1)} className="thumbDown">👍</div>
        </div>
    );
}

export default Like;
