import React, { useEffect, useRef } from 'react'


const Child = ({ data, setData, setKey }) => {
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);
    if (effectCalled.current) {
        renderAfterCalled.current = true;
    }


    useEffect(() => {
        const timer = setInterval(() => {
            // console.log('Timer tick');
            setData(data => data + 1)

        }, 1000);

        return () => {
            console.log("unmount");
            clearInterval(timer);
            setData(0)
        };
    }, []);

    const handleClick = () => {
        setKey(key => key + 10)
    }

    // console.log("Mohan");


    return (
        <>
            <button onClick={handleClick}>Child Increment</button>
            <div>{data}</div>
            {/* <div>{data}</div> */}
        </>
    )
}

export default Child