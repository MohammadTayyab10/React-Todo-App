import React, { useState } from 'react'
import '../index.css'


function Todo() {

    const [inputList, setInputList] = useState("");

    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    };

    const add = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
    };

    return (
        <>


            <div>Todo</div>

            <input id='inp' placeholder='Add an item' onChange={itemEvent}></input> <nbsp></nbsp> <nbsp></nbsp>

            <button onClick={add} > Add </button>

            <ol>

                {/* <li id='li-1'> {inputList} </li> */}

                {Items.map((itemval) => {
                    return <li className='li-1'> 
                {itemval}  <button id='edit-btn'> Edit </button> <nbsp> </nbsp>
                <button id='del-btn'> Delete </button> </li>
                
                })
                }

            </ol>

            {/* 
                <button> Edit </button> <nbsp> </nbsp>
                <button> Delete </button> */}

        </>
    )
}

export default Todo