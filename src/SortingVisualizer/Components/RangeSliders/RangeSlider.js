import React from 'react';
import "./RangeSlider.css";
import ArrayBarRangeSlider from './ArrayBarRangeSlider/ArrayBarRangeSlider';
import AnimationSpeedRangeSlider from './AnimationSpeedRangeSlider/AnimationSpeedRangeSlider';

export default function RangeSlider(props){
    return (
        <div id="range-slider" className='slider-container'>
            <ArrayBarRangeSlider 
                numberOfArrayBars={props.numberOfArrayBars}
                onChangeArrayBarRangeSlider={props.onChangeArrayBarRangeSlider}
            />
            <AnimationSpeedRangeSlider 
                animationSpeed={props.animationSpeed}
                onChangeAnimationSpeedRangeSlider={props.onChangeAnimationSpeedRangeSlider}
            />
        </div>
    )
}