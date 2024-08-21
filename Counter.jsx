import React, { useState, useEffect } from 'react'
// import "./Counter.css"

function Counter({ item }) {
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (localStorage.getItem(item?.name)) {
            setCount(parseInt(localStorage.getItem(item?.name)))
        }
    }, [])

    function handleClick() {
        setCount(count + 1)
        localStorage.setItem(item.name, count + 1)
        console.log(count)
    }
    return (
        <>
        <div id="Counter">
            <p>{count}</p>
            <button style={{height: '4rem', width: '10rem', textAlign: 'center', backgroundColor: 'black', color: 'white'}} onClick={handleClick}>like</button>
            
</div>




        </>
    )
}

export default Counter