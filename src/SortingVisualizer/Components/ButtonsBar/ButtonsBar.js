import React from 'react';
import "./ButtonsBar.css";

export default function ButtonsBar(props){
    return (
        <div className="buttons-bar">
            <button onClick={() => props.generateNewArray()} className='btn btn-sm btn-warning' id='reset'>
                Generate New Array
            </button>
            <button onClick={() => props.bubbleSort() } className='btn btn-sm btn-light' id='bubbleSortButton'>
                Bubble Sort
            </button>
            <button onClick={() => props.selectionSort()} className='btn btn-sm btn-light' id='selectionSortButton'>
                Selection Sort
            </button>
            <button onClick={() => props.insertionSort()} className='btn btn-sm btn-light' id='insertionSortButton'>
                Insertion Sort
            </button>
        </div>
    )
}