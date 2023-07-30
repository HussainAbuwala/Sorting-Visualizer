import React from 'react';
import "./AnimationSpeedRangeSlider.css";
import { Slider} from '@mui/material';

export default function AnimationSpeedRangeSlider(props){
    return (
        <div className="individual-slider-container">
          <p className='slider-text'>Animation Speed (ms)</p>
          <Slider
            value={props.animationSpeed}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={10}
            max={200}
            onChangeCommitted={props.onChangeAnimationSpeedRangeSlider}
        />
        </div>
    )
}