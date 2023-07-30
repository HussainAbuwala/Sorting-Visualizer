import React from 'react';
import "./ArrayBar.css";


export default function ArrayBar(props){
    return (
        <div className="bar-container">
            {
                props.numbersArray.map((value, index) => {
                    return (
                        <div className='array-bar' 
                         key={index} 
                         style={{height: `${value}px`}}
                        >
                        </div>
                    )
                })
            }
        </div>
    )
}