import React, { useState, useEffect } from 'react'

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
            <p>{count}</p>
            <button style={{height: '40px', width: '70px', textAlign: 'center'}} onClick={handleClick}>like</button>
            <br></br>





        </>
    )
}

export default Counter