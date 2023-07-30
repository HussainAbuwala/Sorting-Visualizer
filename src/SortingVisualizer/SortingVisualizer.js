import React from 'react';
import Header from './Components/Header/Header';
import ButtonsBar from './Components/ButtonsBar/ButtonsBar';
import "./SortingVisualizer.css"
import ArrayBar from './Components/ArrayBar/ArrayBar';
import RangeSlider from './Components/RangeSliders/RangeSlider';
import BubbleSort from './SortingAlgorithms/BubbleSort/BubbleSort';
import SelectionSort from './SortingAlgorithms/SelectionSort/SelectionSort';
import InsertionSort from './SortingAlgorithms/InsertionSort/InsertionSort';

const DEFAULT_ANIMATION_SPEED = 50
const DEFAULT_ARRAY_BARS = 50 
const START_NUMBER_RANGE = 5
const END_NUMBER_RANGE = 200
const DEFAULT_COLOR = '#97FEED';


export default function SortingVisualizer(){

    const [state, setState] = React.useState({
        numbersArray: [],
        animationSpeed: DEFAULT_ANIMATION_SPEED,
        numberOfArrayBars: DEFAULT_ARRAY_BARS
    })

    console.log(state.numbersArray)
    React.useEffect(() => {
        generateNewArray()
    }, [state.numberOfArrayBars])

    function generateNewArray() {
        const new_array = [];
        for (let i = 0; i < state.numberOfArrayBars; i++) {
          new_array.push(randomIntFromInterval(START_NUMBER_RANGE, END_NUMBER_RANGE));
        }
        setState({ ...state, numbersArray: new_array });
    }

    // ## Handles if the "Array Size" slider is changed. ## //
    const onChangeArrayBarRangeSlider = (event, value) => {
        console.log(`array range slider new value ${value}`)
        setState({ ...state,numberOfArrayBars: value });
    };

    // ## Handles if the "Animation Speed" slider is changed. ## //
    const onChangeAnimationSpeedRangeSlider = (event, value) => {
        setState({...state, animationSpeed: value });
    };

    // ## Calls the BubbleSort component/function. ## //
    const bubbleSort = () => {
        BubbleSort(state.numbersArray, state.animationSpeed);
    };

    const selectionSort = () => {
        SelectionSort(state.numbersArray, state.animationSpeed);
    };

    const insertionSort = () => {
        InsertionSort(state.numbersArray, state.animationSpeed);
    };
    
    return (
        <div className="main-container">
            <Header />
            <ButtonsBar 
                generateNewArray={() => generateNewArray()} 
                bubbleSort={bubbleSort}
                selectionSort={selectionSort}
                insertionSort={insertionSort}
            />
            <ArrayBar numbersArray={state.numbersArray}/>
            <RangeSlider  
                numberOfArrayBars={state.numberOfArrayBars}
                animationSpeed={state.animationSpeed}
                onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
                onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}  
            />
        </div>
    )

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

